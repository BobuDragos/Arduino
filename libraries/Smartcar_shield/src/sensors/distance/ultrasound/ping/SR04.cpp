#include "SR04.hpp"
#include "../../../../utilities/Utilities.hpp"
namespace
{
const float kTimeToTravelOneCmAndBack   = 29.15 * 2; // In microseconds
const unsigned long kTimeToMeasureOneCm = 120;       // Empirically determined
const uint8_t kInput                    = 0;
const uint8_t kOutput                   = 1;
const uint8_t kLow                      = 0;
const uint8_t kHigh                     = 1;
// We should wait long enough between two consecutive measurements
// so to avoid getting parasitic readings from old returning waves.
const unsigned long kMedianMeasurementDelay = 15; // In milliseconds
} // namespace

using namespace smartcarlib::constants::sr04;
using namespace smartcarlib::utils;

SR04::SR04(uint8_t triggerPin, uint8_t echoPin, unsigned int maxDistance, Runtime& runtime)
    : kTriggerPin{ triggerPin }
    , kEchoPin{ echoPin }
    , kMaxDistance{ maxDistance > 0 ? maxDistance : kDefaultMaxDistance }
    , kTimeout{ kMaxDistance * kTimeToMeasureOneCm }
    , mRuntime(runtime)
    , mAttached{ false }
{
}

void SR04::attach()
{
    if (!mAttached)
    {
        mRuntime.setPinDirection(kTriggerPin, kOutput);
        mRuntime.setPinDirection(kEchoPin, kInput);
        mAttached = true;
    }
}

unsigned int SR04::getDistance()
{
    attach();

    // Generate the pulse
    mRuntime.setPinState(kTriggerPin, kLow);
    mRuntime.delayMicros(5); // Set pin to known state
    mRuntime.setPinState(kTriggerPin, kHigh);
    mRuntime.delayMicros(10); // 10us pulse
    mRuntime.setPinState(kTriggerPin, kLow);
    // Wait for the pulse to arrive and measure its duration
    auto duration = mRuntime.getPulseDuration(kEchoPin, kHigh, kTimeout);
    // Calculate how much far out the object is
    unsigned int calculatedDistance = duration / kTimeToTravelOneCmAndBack;

    return calculatedDistance <= kMaxDistance ? calculatedDistance : kError;
}

unsigned int SR04::getMedianDistance(uint8_t iterations)
{
    if (iterations == 0)
    {
        return kError;
    }

    unsigned int measurements[iterations];
    for (auto i = 0; i < iterations; i++)
    {
        measurements[i] = getDistance();
        mRuntime.delayMillis(kMedianMeasurementDelay);
    }

    return getMedian(measurements, iterations);
}

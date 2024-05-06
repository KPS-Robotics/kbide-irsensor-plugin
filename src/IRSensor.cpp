/******************************************************************
 * Ultrasonic HC-SR04 library for KB-IDE by bavensky
 *****************************************************************/

#include "IRSensor.h"
#include <Arduino.h>

IRSensor::IRSensor() {}
IRSensor::~IRSensor() {}

void IRSensor::begin(uint8_t _irsensor) {
  this->IR_SENSOR_PIN = _irsensor;
  pinMode(this->IR_SENSOR_PIN, INPUT);
}

bool IRSensor::read() { return digitalRead(this->IR_SENSOR_PIN); }

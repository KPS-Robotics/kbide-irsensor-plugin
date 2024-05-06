/******************************************************************
 * Ultrasonic HC-SR04 library for KB-IDE by bavensky
 ******************************************************************/

#ifndef IRSENSOR_H
#define IRSENSOR_H

#include <Arduino.h>

#if ARDUINO < 100
#include <WProgram.h>
#else
#include <Arduino.h>
#endif

class IRSensor {
public:
  IRSensor();
  ~IRSensor();

  void begin(uint8_t _irsensor);
  bool read();

protected:
private:
  int IR_SENSOR_PIN;
};

#endif /*ultrasonic_h*/

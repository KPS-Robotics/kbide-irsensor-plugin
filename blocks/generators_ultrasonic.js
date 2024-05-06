Blockly.JavaScript["irsensor_setup"] = function(block) {
  var Pin = block.getFieldValue("PIN");
  var variable_instance = Blockly.JavaScript.variableDB_.getName(
    block.getFieldValue("instance"),
    Blockly.Variables.NAME_TYPE,
  );
  var code = `
  #EXTINC#include <IRSensor.h>#END
  #VARIABLEIRSensor ${variable_instance};#END
  ${variable_instance}.begin(${Pin});
  \n
  `;
  return code;
};

Blockly.JavaScript["irsensor_read"] = function(block) {
  var variable_instance = Blockly.JavaScript.variableDB_.getName(
    block.getFieldValue("instance"),
    Blockly.Variables.NAME_TYPE,
  );
  var code = `${variable_instance}.read()`;
  return [code, Blockly.JavaScript.ORDER_NONE];
};

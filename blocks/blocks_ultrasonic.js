Blockly.Blocks["irsensor_setup"] = {
  init: function() {
    this.appendDummyInput()
      .appendField(
        new Blockly.FieldVariable(
          "irsensor1",
          null,
          ["Plugin.Ultrasonic"],
          ["Plugin.Ultrasonic"],
        ),
        "instance",
      )
      .appendField("setup (pin")
      .appendField(new Blockly.FieldTextInput("4"), "PIN")
      .appendField(")");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.Blocks["irsensor_read"] = {
  init: function() {
    this.appendDummyInput()
      .appendField(
        new Blockly.FieldVariable(
          "irsensor1",
          null,
          ["Plugin.Ultrasonic"],
          ["Plugin.Ultrasonic"],
        ),
        "instance",
      )
      .appendField("read");
    this.setOutput(true, "Boolean");
    this.setColour(120);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

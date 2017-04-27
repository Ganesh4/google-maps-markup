

export default function acres(result) {
  var output = {};

  var ACRE_TO_CONVERT_MAP = {
    sft: 43560,
    smi: 0.0015625,
    skm: 0.00404686
  };

  if(result.unit === 'acr') {
    output.value = Math.round(result.value);
    output.unit = result.unit;
  } else {
    output.value = result.value * ACRE_TO_CONVERT_MAP[result.unit];
    output.unit = result.unit;

    if (output.value < 1) {
      // 4 decimal places
      output.value = Math.round(output.value * 10000) / 10000;
    } else if (output.value >= 1 && output.value < 10) {
      // 1 decimal place
      output.value = Math.round(output.value * 10) / 10;
    } else {
      output.value = Math.round(output.value);
    }
  }

  output.measurementType = result.measurementType;

  return output.value !== undefined ? output : result;
}

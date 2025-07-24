function validateUnionType(value: any, allowedTypes: string[]): boolean {
  const valueType = typeof value;
  if (value === null && allowedTypes.includes('null')) return true;
  if (Array.isArray(value) && allowedTypes.includes('array')) return true;
  return allowedTypes.includes(valueType);
}

// Demonstration
const a = 42;
const b = "hello";
const c = true;
const d = null;
const e = [1, 2, 3];

console.log(validateUnionType(a, ["string", "number"]));
console.log(validateUnionType(b, ["string", "number"]));
console.log(validateUnionType(c, ["string", "number"]));
console.log(validateUnionType(d, ["null", "number"]));
console.log(validateUnionType(e, ["array", "object"]));

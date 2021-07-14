const frameworks = ['React','Vue','Angular','React Native'];
const textCompare = 'I´m Ironman';

// Reverse strings function
const reverseString = (str, cb) => {
    cb(str.split("").reverse().join(""));
  };


// Test String
test("It should has the word Ironman", () => {
    expect(textCompare).toMatch(/Ironman/)
});

// Test Array
test("It Should has react",()=> {
    expect(frameworks).toContain("React");
});



// Test numbers
test("It should be greater than", ()=>{
    expect(10).toBeGreaterThan(9);
});

// Test Booleans
test("It should be true", () => {
    expect(true).toBeTruthy();
});

 // Test callbacks
test("The callback should return a reversed word", () => {
    reverseString("Platzi", str => {
      expect(str).toBe("iztalP");
    });
});
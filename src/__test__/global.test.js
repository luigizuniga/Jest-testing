// First Test With Jest
// texto a comparar
const textCompare = 'I´m Ironman';

// Prueba
test("It should has the word Ironman", () => {
    expect(textCompare).toMatch(/Ironman/)
});




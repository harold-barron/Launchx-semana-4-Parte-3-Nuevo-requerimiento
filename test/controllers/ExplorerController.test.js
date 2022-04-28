const ExplorerController = require ("./../../lib/controllers/ExplorerController");

describe("Test for Explorer Controller", ()=>
{
    test("1. Gettin de list of explorers with a specific mission",()=>
    {
        const listOfExplorers = ExplorerController.getExplorersByMission("node");
        const ExplorersWithNode = listOfExplorers.forEach(expName => expect(expName.mission).toContain("node"));
    });
    test("2. Gettin de names of the explorers in a specific mission",()=>
    {
        const namesOfExplorers = ExplorerController.getExplorersUsernamesByMission("node");
        console.log(namesOfExplorers);   
    });
    test("3. Gettin de amount of the explorers in a specific mission",()=>
    {
        const amountOfExplorers = ExplorerController.getExplorersAmonutByMission("node");
        expect(amountOfExplorers).toBe(10);
    });
    test("4.Using apllyValidationInNumber with ExplorerController", ()=>
    {
        const numberToValidate = ExplorerController.getValidation(5);
        expect(numberToValidate).toBe("Fizz");
    })
});



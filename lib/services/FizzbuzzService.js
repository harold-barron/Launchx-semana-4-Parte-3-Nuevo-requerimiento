const Reader = require("./../../lib/utils/Reader");

class FizzzbuzzService{

    static applyValidationInExplorer(path,explorer)
    {
        const explorers = Reader.readJsonFile(path);
        const FindExplorerByName = explorers.find((explorerName) => explorerName.name === explorer);
        console.log(FindExplorerByName.score);
        if(FindExplorerByName.score%3 === 0)
        {
            FindExplorerByName.trick = "Fizz";
        }
        if(FindExplorerByName.score%5 === 0)
        {
            if(FindExplorerByName.score%3 === 0)
            {
                FindExplorerByName.trick += "Buzz";
            }
            else
            {
                FindExplorerByName.trick = "Buzz";
            }
        }
        else if (FindExplorerByName.score%3 != 0 && FindExplorerByName.score%5 != 0)
        {
            FindExplorerByName.trick = FindExplorerByName.score;
        }
        
        return FindExplorerByName;
    }
}

module.exports = FizzzbuzzService;
/*
Assessment Requirements
1.⁠ ⁠Create a variable that can hold a number of NFT's. What type of variable might this be?
2.⁠ ⁠Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3.⁠ ⁠Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4.⁠ ⁠For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
const NFT_HOLDER=[];
function mintNFT (roll,name,uid,year) {
    const nft_object_for_metadata={
        roll: roll,
        name: name,
        uid: uid,
        year: year
    };
    NFT_HOLDER.push(nft_object_for_metadata);

}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for(let i=0;i<NFT_HOLDER.length;i++){
console.log("NFT " + (i + 1) + ":");
console.log("  Roll: " + NFT_HOLDER[i].roll);
console.log("  Name: " + NFT_HOLDER[i].name);
console.log("  UID: " + NFT_HOLDER[i].uid);
console.log("  Year: " + NFT_HOLDER[i].year);
console.log();
        
    }

}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
return NFT_HOLDER.length;
}

// call your functions below this line

mintNFT("123", "BHASKAR", "22BCS10403", "2005");
mintNFT("456", "SUMIT BHAI", "22BCS10048", "2003");
mintNFT("459", "ADARSH BHAI", "22BCS12807", "2004");

console.log("Printing NFT metadata:");
listNFTs();

const totalSupply = getTotalSupply();
console.log("Total number of minted NFTs:", totalSupply);

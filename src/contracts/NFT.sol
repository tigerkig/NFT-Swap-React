//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract WSNFT is ERC721Enumerable, Ownable{
  uint public constant MAX_UNITS = 100000000000;
  string private _base_token_uri = "ipfs://";

  // Optional mapping for token URIs
  mapping (uint256 => string) private _tokenURISuffixes;

  constructor() ERC721("WSNFT", "WN")  {

  }

  modifier saleIsOpen{
    require(totalSupply() < MAX_UNITS, "Sale end");
    _;
  }

  function mintToken(address _to, string memory _hashUrl) public payable saleIsOpen onlyOwner returns (uint retVal ) {
    require(totalSupply() + 1 <= MAX_UNITS, "Max limit");
    require(totalSupply() < MAX_UNITS, "Sale end");
    uint256 newTokenId = totalSupply();
    _safeMint(_to, newTokenId);
    _setTokenURISuffix(newTokenId, _hashUrl);

    return newTokenId;
  }

  /**
   * @dev Sets `_tokenURI` as the tokenURI of `tokenId`.
   *
   * Requirements:
   *
   * - `tokenId` must exist.
   */
  function _setTokenURISuffix(uint256 tokenId, string memory _tokenURISuffix) internal virtual {
    require(_exists(tokenId), "ERC721URIStorage: URI set of nonexistent token");
    _tokenURISuffixes[tokenId] = _tokenURISuffix;
  }

  /**
     * @dev See {IERC721Metadata-tokenURI}.
     */
  function tokenURI(uint256 tokenId) public view virtual override returns (string memory) {
    require(_exists(tokenId), "ERC721URIStorage: URI query for nonexistent token");

    string memory _tokenURISuffix = _tokenURISuffixes[tokenId];

    if (bytes(_tokenURISuffix).length > 0) {
      return string(abi.encodePacked(_base_token_uri, _tokenURISuffix));
    }
    return _base_token_uri;
  }

  /**
   * @dev Destroys `tokenId`.
   * The approval is cleared when the token is burned.
   *
   * Requirements:
   *
   * - `tokenId` must exist.
   *
   * Emits a {Transfer} event.
   */
  function burn(uint256 tokenId) public onlyOwner {
    super._burn(tokenId);

    if (bytes(_tokenURISuffixes[tokenId]).length != 0) {
      delete _tokenURISuffixes[tokenId];
    }
  }

  function withdrawAll() public payable onlyOwner {
    require(payable(_msgSender()).send(address(this).balance));
  }

  // Update base uri
  function setBaseURI(string memory _newUri) public payable onlyOwner{
    _base_token_uri = _newUri;
  }
}

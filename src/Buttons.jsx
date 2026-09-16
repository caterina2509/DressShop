function Buttons( {filteredCLothes}) {
return ( 
<div className="cont">
    <button className="change" onClick={() => filteredCLothes("dress")}>Dresses </button>
    <button className="change"  onClick={() => filteredCLothes("pants")}>Pants </button>
    <button className="change"  onClick={() => filteredCLothes("skirt")}>Skirts </button>
    <button className="change" onClick={() => filteredCLothes("shoes")}>Shoes </button>
    <button className="change"  onClick={() => filteredCLothes("shirt")}>Shirts </button>
</div>)
}
export default Buttons;
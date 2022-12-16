
import "./Searchbar.css"
export default function SearchBar(){
    return(<><div class="search-bar">
    <form action="#">
      <div class="row">
        <div class="form-group col-lg-4">
          <input type="search" name="search" placeholder="What are you searching for?"/>
        </div>
        <div class="form-group col-lg-3">
          <input type="date" name="location" placeholder="Location" id="location"/>
          <label for="location" class="location"><i class="fa fa-dot-circle-o"></i></label>
        </div>
        <div class="form-group col-lg-3">
          <input type="date" name="location" placeholder="Location" id="location"/>
          <label for="location" class="location"><i class="fa fa-dot-circle-o"></i></label>
        </div>
      
        <div class="form-group col-lg-2">
          <input type="submit" value="Search" class="submit"/>
        </div>
      </div>
    </form>
  </div></>)
}
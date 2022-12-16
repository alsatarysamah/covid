import "./SearchResult.css"

export default function SearchResult(){
    return(<>
    <div class="row row-cols-1 row-cols-md-2 row-cols-xl-4 justify-content-between mt-3">
    <div class="col">
             <div class="card radius-10 border-start border-0 border-3 border-info">
                <div class="card-body">
                    <div class="d-flex align-items-center">
                        <div>
                            <p class="mb-0 text-secondary">Total Orders</p>
                            <h4 class="my-1 text-info">4805</h4>
                        </div>
                        
                    </div>
                </div>
             </div>
           </div>
           
    </div>
    
    </>)
}
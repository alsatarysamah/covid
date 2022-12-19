import "./SearchResult.css"

export default function SearchResult(props){

    return(<>
    <div class="col">
             <div class="card radius-10 border-start border-0 border-3 border-dangerous">
                <div class="card-body">
                    <div class="d-flex align-items-center">
                        <div>
                            <p class="mb-0 text-secondary">Date: {props.date}</p>
                            <h6 class="my-1 text-warning">Num of confirmed cases  {props.cases}</h6>
                        </div>
                        
                    </div>
                </div>
             
           </div>
           
    </div>
    
    </>)
}
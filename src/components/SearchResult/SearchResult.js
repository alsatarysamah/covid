import "./SearchResult.css"

export default function SearchResult(props){
    console.log(props);
    return(<>
    <div class="col">
             <div class="card radius-10 border-start border-0 border-3 border-dangerous">
                <div class="card-body">
                    <div class="d-flex align-items-center">
                        <div>
                            <p class="mb-0 text-secondary">{props.date}</p>
                            <h4 class="my-1 text-warning">{props.cases}</h4>
                        </div>
                        
                    </div>
                </div>
             
           </div>
           
    </div>
    
    </>)
}
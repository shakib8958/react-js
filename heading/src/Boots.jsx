export default function Boots() {
    return (
        <>
        
        <div class="container">
  <h2>Simple Collapsible</h2>
  <a href="#demo" class="btn btn-info" data-toggle="collapse">Simple collapsible</a>
  <div id="demo" class="collapse">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
    sed do eiusmod tempor incididunt ut <br></br> labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris <br></br> nisi ut aliquip ex ea commodo consequat.
  </div>
</div> 

<h2>Basic Modal Example</h2>
  
  <button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Open Modal</button>

  <div class="modal fade" id="myModal" role="dialog">
    <div class="modal-dialog">
    
    
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title">Modal Header</h4>
        </div>
        <div class="modal-body">
          <p>Some text in the modal.</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        </div>
      </div>
      
    </div>
  </div>   
        </>

    );
}
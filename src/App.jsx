import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import content from './translate/transName';
console.log(content);
function App() {
  const [lang,setLang] = useState('eng')
  return (
   <>

    <div className="vh-100 d-flex align-items-center justify-content-center">
      <div className="row">
        <div className="col rounded border border-info">
        <form>
        <div className="row">
        <div className="col-6 mt-2">
           <h4> {content[lang].login.main}</h4>
           </div>
         <div className="col-6 mt-2">
         <select className="form-select sm d-flex align-items-end"
         onChange= {(evt) => setLang(evt.target.value)}
         defaultValue = {lang}
         >
            <option value="uz">Uzbek</option>
            <option value="eng">English</option>
          </select>
         </div>
        </div>
  <div class="form-group mt-4">
    <label for="exampleInputEmail1">{content[lang].login.label}</label>
    <input type="email" class="form-control" placeholder= {content[lang].login.placeholder} />
    <small id="emailHelp" class="form-text text-muted">{content[lang].login.public}</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1"> {content[lang].possword.label}</label>
    <input type="password" class="form-control" placeholder= {content[lang].possword.placeholder} />
  </div>
  <div class="form-check">
    <input type="checkbox" class="form-check-input" />
    <label class="form-check-label" for="exampleCheck1"> {content[lang].check}</label>
  </div>
  <button type="submit" class="btn btn-primary mb-2"> {content[lang].button} </button>
</form>
        </div>
      </div>
    </div>
  
   </>
  
  );
}

export default App;

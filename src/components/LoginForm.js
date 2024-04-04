import { useState } from "react";
import { VideoPlayer } from "./VideoPlayer";

export function LoginForm() {
    const [form,setForm] = useState({email:'',password:''})
    const [isPlaying,setIsPlaying] = useState(false);

   function handleFormSubmit(){
        console.log(form);
    }

   function onFormChange(e){
    const name = e.target.name;
    const value = e.target.value;
    setForm({...form,[name]:value})
    }

  return (
    <div>
        <VideoPlayer isPlaying={isPlaying} src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"></VideoPlayer>
        <button onClick={()=> setIsPlaying(!isPlaying) } >Play/Pause</button>
      <form>
        <div>
          <label for="email">Email:</label>
          <input name="email" id="email" type="text" value={form.email} onChange={onFormChange}></input>
        </div>
        <div>
          <label for="pssword">Password</label>
          <input name="password" id="pssword" type="pasword" value={form.password} onChange={onFormChange}></input>
        </div>
        <div>
          <button type="button" onClick={handleFormSubmit}>Submit</button>
        </div>
      </form>
    </div>
  );
}

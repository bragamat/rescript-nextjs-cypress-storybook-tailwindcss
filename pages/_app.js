import '../styles/globals.css'
import { make as ResApp } from "src/App/_App.bs.js"


// Note:
// We need to wrap the make call with
// a Fast-Refresh conform function name,
// (in this case, uppercased first letter)
//
// If you don't do this, your Fast-Refresh will
// not work!
export default function App(props) {
  return <ResApp {...props} />;
}

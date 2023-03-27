import "./style.scss"
import { useSelector } from "react-redux";
import Loader from "../../../assets/images/loader.svg";

function LoaderComponent() {
  const { isLoading } = useSelector((state: any) => state.loader);
  // console.log('isLoading', isLoading)
  if (isLoading) {
    return (
      <div className="overlayloader">
        <img src={Loader} alt=""></img>
        <div className="loader">
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
}

export default LoaderComponent;

import toast from 'react-hot-toast';

let options : any = {
  position: "top-center",
  autoClose: 8000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
}

class Toaster {
  success = (message : any) => {
    toast.success(message, options);
  };

  error = (message : any) => {
    toast.error(message, options);
  };

}

export const toaster = new Toaster();

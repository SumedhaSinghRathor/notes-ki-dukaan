import Navbar from "../../components/Navbar";
import UploadDialog from "./UploadDialog";
import Footer from "../../components/Footer";

function Upload() {
  return (
    <div className="w-screen h-screen flex flex-col justify-between items-center">
      <Navbar />
      <UploadDialog />
      <Footer />
    </div>
  );
}

export default Upload;

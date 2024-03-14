import { useState } from 'react';
import { storage } from '../firebaseConfig';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';

const useFileUploader = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (selectedFile) {
      const fileRef = ref(storage, `logos/${selectedFile.name}`);
      await uploadBytes(fileRef, selectedFile);
      const downloadURL = await getDownloadURL(fileRef);
      return downloadURL;
    }
    return '';
  };

  const fileUploaderInput = (<input type='file' onChange={handleFileChange} />);
  return { fileUploaderInput, handleUpload };
};

export default useFileUploader;

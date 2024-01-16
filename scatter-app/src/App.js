import { useState, useMemo, useCallback } from "react";
import { useDropzone } from "react-dropzone";
// import fs from "fs";

import Scatter from "./scatter/Scatter";

function App() {
    const onDrop = useCallback((acceptedFiles) => {
        //console.log(acceptedFiles);
        // １つ目のファイルだけ使用する
        const file = acceptedFiles[0];
        
        const reader = new FileReader();
        reader.addEventListener("load", () => {
            setContents(typeof reader.result === "string" ?  reader.result: undefined);
        });
        reader.readAsText(file, "utf-8");
    }, []);
    const { getRootProps, getInputProps, isDragActive, acceptedFiles } = useDropzone({ onDrop });
    const [ contents, setContents ] = useState();

    const files = useMemo(() => 
        acceptedFiles.map(
            file => 
                <li key={file.path}>
                    {file.path} - {file.size} bytes
                </li>
        ),
        [acceptedFiles]
    );

    return (
        <>
            {/* <input type="file" accept="text/csv" /> */}
            <div {...getRootProps()}>
                <input {...getInputProps()} />
                {/*isDragActive ?
                    <p>Drop the files here ...</p> :
                    
                */}
                <p>CSVファイルをここへドロップするか、ここをクリックしてCSVファイルを選択してください。</p>
            </div>
            <div>
                <ul>
                {files}
                </ul>
            </div>
            <Scatter csv_data={contents} />
        </>
    );
}

export default App;

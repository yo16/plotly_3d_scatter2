import Plot from 'react-plotly.js';


const Scatter = ({csv_data=null}) => {
    const unpack = (rows, key) => (
        rows.map((row)=>row[key])
    );

    // sample
    let rows = [
        {x:10, y:0, z:0},
        {x:0, y:10, z:0},
        {x:0, y:0, z:10},
        {x:10, y:10, z:10},
    ]
    // csv_dataがあったら更新
    if (csv_data){
        let start_from = 1;     // csvの開始行

        const lines = csv_data.split("\n");
        // １行目は列名
        let col_names = lines[0].split(",").map((c)=>c.trim());
        // x,y,zが存在しない場合は、x:1列目、y:2列目、z:3列目 とする
        if (!col_names.includes("x") || !col_names.includes("y") || !col_names.includes("z")){
            col_names = ["x", "y", "z"];
            start_from = 0;     // 開始行は0から
        }

        rows = lines.filter((_,i)=>i>=start_from)
            .map((l) => {
                const cols = l.split(",").map((c)=>c.trim());
                return Object.assign(...col_names.map((k,i) => ({[k]:cols[i]})));
            })
        ;
    }

    const data = [{
        x: unpack(rows, "x"),
        y: unpack(rows, "y"),
        z: unpack(rows, "z"),
        mode: "markers",
        marker: {
            size: 2,
        },
        type: "scatter3d",
    }];
    const layout = {
        width: 800, height: 800, title: '3d-scatter',
        paper_bgcolor: "#eee",
    };

    return (
        <>
            <Plot
                data={data}
                layout={ layout }
            />
        </>
    );
};

export default Scatter;

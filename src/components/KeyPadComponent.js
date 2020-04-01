import React from "react";

const Row = ({ start, end, onClick, hs = start, he = end }) => {
    let arr = [];
    for (let i = start; i <= end; i++) {
        arr.push(i);
    }
    return (
        <div>
            {arr.map((val, index) => {
                return (
                    <button
                        style={{
                            fontWeight: `bold`,
                            width: `32px`,
                            margin: `1px`,
                            color: `${
                                val >= hs && val <= he
                                    ? val === parseInt((hs + he) / 2)
                                        ? "green"
                                        : "blue"
                                    : "black"
                            }`
                        }}
                        key={index}
                        onClick={() => {
                            onClick({ target: { value: val } });
                        }}
                    >
                        {val}
                    </button>
                );
            })}
        </div>
    );
};

const KeyPadComponent = ({ start, end, onClick, hs, he }) => {
    let rows = [];
    for (let i = start; i <= end; i += 10) {
        rows.push(
            <Row
                key={i}
                hs={hs}
                he={he}
                start={i}
                end={i + 9 > end ? end : i + 9}
                onClick={e => onClick(e)}
            />
        );
    }

    return rows.map((row, index) => <div key={index}>{row}</div>);
};

export default KeyPadComponent;

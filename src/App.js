import "./styles.css";
import React, { useRef } from "react";

export default function App() {
  const div1 = useRef(null);
  const div2 = useRef(null);

  return (
    <div className="App">
      <div
        ref={div1}
        style={{
          width: "50%",
          overflowX: "auto"
        }}
        onScroll={() => {
          if (div2.current)
            div2.current.scrollLeft = div1.current?.scrollLeft || 0;
        }}
      >
        <table border="2px">
          <tr>
            <th>header1</th>
            <th>header2</th>
            <th>header3</th>
            <th>header4</th>
            <th>header5</th>
            <th>header6</th>
            <th>header7</th>
            <th>header8</th>
            <th>header9</th>
            <th>header10</th>
          </tr>
          <tr>
            <td>January</td>
            <td>$100</td>
            <td>January</td>
            <td>$100</td>
            <td>January</td>
            <td>$100</td>
            <td>January</td>
            <td>$100</td>
            <td>January</td>
            <td>$100</td>
          </tr>
          <tr>
            <td>February</td>
            <td>$80</td>
            <td>February</td>
            <td>$80</td>
            <td>February</td>
            <td>$80</td>
            <td>February</td>
            <td>$80</td>
            <td>February</td>
            <td>$80</td>
          </tr>
        </table>
      </div>

      <div
        style={{
          width: "50%",
          overflowX: "auto"
        }}
        ref={div2}
        onScroll={() => {
          if (div1.current)
            div1.current.scrollLeft = div2.current?.scrollLeft || 0;
        }}
      >
        <table border="2px">
          <tr>
            <th>header1</th>
            <th>header2</th>
            <th>header3</th>
            <th>header4</th>
            <th>header5</th>
            <th>header6</th>
            <th>header7</th>
            <th>header8</th>
            <th>header9</th>
            <th>header10</th>
            <th>header11</th>
            <th>header12</th>
            <th>header13</th>
          </tr>
          <tr>
            <td>111</td>
            <td>222</td>
            <td>333</td>
            <td>444</td>
            <td>555</td>
            <td>666</td>
            <td>777</td>
            <td>888</td>
            <td>999</td>
            <td>100</td>
            <td>999</td>
            <td>100</td>
            <td>100</td>
          </tr>
          <tr>
            <td>111</td>
            <td>222</td>
            <td>333</td>
            <td>444</td>
            <td>555</td>
            <td>666</td>
            <td>777</td>
            <td>888</td>
            <td>999</td>
            <td>100</td>
            <td>999</td>
            <td>100</td>
            <td>100</td>
          </tr>
        </table>
      </div>
    </div>
  );
}

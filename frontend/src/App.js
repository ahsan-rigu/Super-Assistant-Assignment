import logo from "./logo.svg";
import "./App.css";
import FormHeader from "./Components/FormHeader";
import { MdOutlineFileUpload } from "react-icons/md";
import Paragraph from "./Components/Paragraph";
import MCQ from "./Components/MCQ";
import { fieldsData } from "./data/FormFields";

function App() {
  return (
    <div className="App">
      <form>
        <FormHeader />
        {fieldsData.map((field) => {
          if (field.type === "radio")
            return <MCQ title={field.title} options={field.options} />;
        })}
        <section className="checkbox">
          <span>
            Checkbox <b className="red">*</b>
          </span>
          <label>
            <input type="checkbox" name="MCQ" id="Option 1" /> Option 1
          </label>
          <label>
            <input type="checkbox" name="MCQ" id="Option 2" /> Option 2
          </label>
          <label>
            <input type="checkbox" name="MCQ" id="Option 3" /> Option 3
          </label>
        </section>
        <section className="short-answer">
          <span>
            {" "}
            Short Answer <b className="red">*</b>
          </span>
          <input type="text" name="short-answer" id="short-answer" />
        </section>
        <Paragraph />
        <section className="dropdown">
          <span>
            {" "}
            Dropdown <b className="red">*</b>
          </span>
          <select name="dropdown" id="dropdown">
            <option value="">Choose</option>
            <option value="Option 1">Option 1</option>
            <option value="Option 2">Option 2</option>
            <option value="Option 3">Option 3</option>
          </select>
        </section>
        <section className="file-upload">
          <span>
            {" "}
            File Upload <b className="red">*</b>
          </span>
          <label htmlFor="file-upload" className="file-upload-label">
            <span className="file-selector">
              <MdOutlineFileUpload size={"1.25rem"} /> Add File
            </span>
            <input type="file" name="file-upload" id="file-upload" />
          </label>
        </section>
        <section className="linear-scale">
          <span>
            {" "}
            Linear Scale <b className="red">*</b>
          </span>
          <div className="linear-scale-container">
            <span>Worst</span>

            <label>
              1
              <input type="radio" name="linear-scale" id="linear-scale-1" />
            </label>
            <label>
              2
              <input type="radio" name="linear-scale" id="linear-scale-2" />
            </label>
            <label>
              3
              <input type="radio" name="linear-scale" id="linear-scale-3" />
            </label>
            <label>
              4
              <input type="radio" name="linear-scale" id="linear-scale-4" />
            </label>
            <label>
              5
              <input type="radio" name="linear-scale" id="linear-scale-5" />
            </label>
            <span>Best</span>
          </div>
        </section>
        <section className="multiple-choice-grid">
          <span>
            {" "}
            Multiple Choice Grid <b className="red">*</b>
          </span>
          <table>
            <thead>
              <tr>
                <td></td>
                <td>Column 1</td>
                <td>Column 2</td>
                <td>Column 3</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Row 1</td>
                <td>
                  <input
                    type="radio"
                    name="multiple-choice-grid-r1"
                    id="r1c1"
                  />
                </td>
                <td>
                  <input
                    type="radio"
                    name="multiple-choice-grid-r1"
                    id="r1c2"
                  />
                </td>
                <td>
                  <input
                    type="radio"
                    name="multiple-choice-grid-r1"
                    id="r1c3"
                  />
                </td>
              </tr>
              <tr>
                <td>Row 2</td>
                <td>
                  <input
                    type="radio"
                    name="multiple-choice-grid-r2"
                    id="r2c1"
                  />
                </td>
                <td>
                  <input
                    type="radio"
                    name="multiple-choice-grid-r2"
                    id="r2c2"
                  />
                </td>
                <td>
                  <input
                    type="radio"
                    name="multiple-choice-grid-r2"
                    id="r2c3"
                  />
                </td>
              </tr>
              <tr>
                <td>Row 3</td>
                <td>
                  <input
                    type="radio"
                    name="multiple-choice-grid-r3"
                    id="r3c1"
                  />
                </td>
                <td>
                  <input
                    type="radio"
                    name="multiple-choice-grid-r3"
                    id="r3c2"
                  />
                </td>
                <td>
                  <input
                    type="radio"
                    name="multiple-choice-grid-r3"
                    id="r3c3"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </section>
        <section className="multiple-choice-grid">
          <span>
            {" "}
            Tick Box Grid <b className="red">*</b>
          </span>
          <table>
            <thead>
              <tr>
                <td></td>
                <td>Column 1</td>
                <td>Column 2</td>
                <td>Column 3</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Row 1</td>
                <td>
                  <input
                    type="checkbox"
                    name="multiple-choice-grid-r1"
                    id="r1c1"
                  />
                </td>
                <td>
                  <input
                    type="checkbox"
                    name="multiple-choice-grid-r1"
                    id="r1c2"
                  />
                </td>
                <td>
                  <input
                    type="checkbox"
                    name="multiple-choice-grid-r1"
                    id="r1c3"
                  />
                </td>
              </tr>
              <tr>
                <td>Row 2</td>
                <td>
                  <input
                    type="checkbox"
                    name="multiple-choice-grid-r2"
                    id="r2c1"
                  />
                </td>
                <td>
                  <input
                    type="checkbox"
                    name="multiple-choice-grid-r2"
                    id="r2c2"
                  />
                </td>
                <td>
                  <input
                    type="checkbox"
                    name="multiple-choice-grid-r2"
                    id="r2c3"
                  />
                </td>
              </tr>
              <tr>
                <td>Row 3</td>
                <td>
                  <input
                    type="checkbox"
                    name="multiple-choice-grid-r3"
                    id="r3c1"
                  />
                </td>
                <td>
                  <input
                    type="checkbox"
                    name="multiple-choice-grid-r3"
                    id="r3c2"
                  />
                </td>
                <td>
                  <input
                    type="checkbox"
                    name="multiple-choice-grid-r3"
                    id="r3c3"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </form>
    </div>
  );
}

export default App;

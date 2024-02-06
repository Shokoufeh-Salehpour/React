import { useSelector, useDispatch } from "react-redux";
import {
  setBgColor,
  setBorderColor,
  setDark,
  setLight,
  setSolarized,
  setTextColor,
} from "../../utils/slices/theme";

function Options() {
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  console.log(theme);
  return (
    <div
      style={{
        border: "1px solid",
        padding: "20px",
        flexBasis: "100%",
        display: "flex",
        flexDirection: "column",
        rowGap: "8px",
        borderColor: theme.borderColor,
      }}
    >
      <h1 style={{ marginTop: "0" }}>Options</h1>
      <p>This is option page of admin panel.</p>

      <div>
        <label>Text Color: </label>
        <input
          type="color"
          value={theme.textColor}
          onChange={(e) => dispatch(setTextColor(e.target.value))}
        />
      </div>
      <div>
        <label>Border Color: </label>
        <input
          type="color"
          value={theme.borderColor}
          onChange={(e) => dispatch(setBorderColor(e.target.value))}
        />
      </div>
      <div>
        <label>Background Color: </label>
        <input
          type="color"
          value={theme.bgColor}
          onChange={(e) => dispatch(setBgColor(e.target.value))}
        />
      </div>
      <div style={{ display: "flex", gap: "12px" }}>
        <button onClick={() => dispatch(setLight())}>Light Theme</button>
        <button onClick={() => dispatch(setDark())}>Dark Theme</button>
        <button onClick={() => dispatch(setSolarized())}>
          Solarized Theme
        </button>
      </div>
    </div>
  );
}

export default Options;

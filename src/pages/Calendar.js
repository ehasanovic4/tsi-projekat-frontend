import React, { useState } from "react";
import Calendar from "react-calendar";
import "../styles/Calendar.css";
import Time from "../components/Time.js";
import Dialog from "@material-ui/core/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";

/*import slika from "../assets/slika_rezervisi.jpg"*/

function Kalendar() {
  const [date, setDate] = useState(new Date());
  const [showTime, setShowTime] = useState(false);
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [open, setOpen] = React.useState(false);

  const [time, setTime] = useState("");

  const handleClickToOpen = () => {
    setOpen(true);
  };

  const handleToClose = () => {
    setOpen(false);
  };

  return (
    <div className="Calendar" /*style={{backgroundImage: `url(${slika})`}*/>
      <div className="CalTopAndBottom">
        <div className="CalendarTop">
          <h3 className="header">Odaberite datum termina:</h3>
          <div className="calendar-container">
            <Calendar
              onChange={setDate}
              value={date}
              onClickDay={() => setShowTime(true)}
            />
            <p> </p>
          </div>
        </div>
        <div className="CalendarBottom">
          {date.length > 0 ? (
            <p>
              <span>Start:</span>
              {date[0].toDateString()}
              &nbsp; &nbsp;
              <span>End:</span>
              {date[1].toDateString()}
            </p>
          ) : (
            <p>
              <span>Odabrani datum: </span>
              {date.toDateString()}
            </p>
          )}
          {/* <Time showTime={showTime} date={date} open={open} /> */}

            <Time showTime={showTime} date={date} handleClickToOpen={handleClickToOpen} setTime={setTime} />

          <Dialog open={open} onClose={handleToClose}>
            <DialogTitle>{"Unesite podatke"}</DialogTitle>

            <DialogContent>
              <DialogContentText>
                <div className="pocetna">
                  <div className="rezervisi">
                    Odaberite uslugu: 
                    <select>
                      <option> Njega kose</option>
                      <option> Njega lica</option>
                      <option> Njega ruku i noktiju</option>
                      <option> Njega tijela</option>
                    </select>
                    <form>
                      <p> </p>
                      <p> </p>
                      <label>
                        Ime:
                        <input
                          type="text"
                          style={{
                            color: "crimson",
                            lineHeight: 2,
                            padding: 7,
                          }}
                          name="ime"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                        <p></p>
                      </label>
                      <label>
                        Prezime:
                        <input
                          type="text"
                          style={{
                            color: "crimson",
                            lineHeight: 2,
                            padding: 7,
                          }}
                          lastname="Prezime"
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                        />
                        <p></p>{" "}
                      </label>
                      <label>
                        E-mail:
                        <input
                          type="text"
                          style={{
                            color: "crimson",
                            lineHeight: 2,
                            padding: 7,
                          }}
                          email="E-mail"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        <p></p>
                      </label>
                      Napomene:
                      <textarea
                        style={{
                          color: "indianred",
                          lineHeight: 2,
                          padding: 10,
                        }}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                      >
                        Unesite dodatne napomene ili poruku za Vaš termin.{" "}
                      </textarea>
                      Odabrali ste {time}h, {date.toDateString()}
                      <p></p>
                      {/* potencijalno jos dodati checkbox za 'Da li zelite primati obavijesti?' */}
                    </form>
                  </div>

            

                </div>
                
              </DialogContentText>
            </DialogContent>

            <DialogActions>
              <Button onClick={handleToClose} color="primary" autoFocus>
                <input
                  type="submit"
                  style={{
                    color: "crimson",
                    lineHeight: 2,
                    padding: 7,
                    /*  textAlign: 'center'*/
                  }}
                  value="Rezerviši"
                />
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      </div>

      {/* <div className="UnosPodataka">
        <h2> Unesite podatke </h2>
         Popunjavanje forme za rezervaciju 
        <div className="pocetna">
          <div className="rezervisi">
            Odaberite uslugu:
            <select>
              <option> Njega kose</option>
              <option> Njega lica</option>
              <option> Njega ruku i noktiju</option>
              <option> Njega tijela</option>
            </select>
            <form>
              <p> </p>
              <p> </p>
              <label>
                Ime:
                <input
                  type="text"
                  style={{ color: "crimson", lineHeight: 2, padding: 7 }}
                  name="ime"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <p></p>
              </label>
              <label>
                Prezime:
                <input
                  type="text"
                  style={{ color: "crimson", lineHeight: 2, padding: 7 }}
                  lastname="Prezime"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
                <p></p>{" "}
              </label>
              <label>
                E-mail:
                <input
                  type="text"
                  style={{ color: "crimson", lineHeight: 2, padding: 7 }}
                  email="E-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <p></p>
              </label>
              Napomene:
              <textarea
                style={{ color: "indianred", lineHeight: 2, padding: 10 }}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              >
                Unesite dodatne napomene ili poruku za Vaš termin.{" "}
              </textarea>
              <p></p>
              {/* potencijalno jos dodati checkbox za 'Da li zelite primati obavijesti?' 
              <input
                type="submit"
                style={{ color: "crimson", lineHeight: 2, padding: 7 }}
                value="Rezerviši"
              />
            </form>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Kalendar;

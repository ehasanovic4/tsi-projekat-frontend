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
import Axios from "axios";
import validator from "validator";

function Kalendar() {
  const [date, setDate] = useState(new Date());
  const [showTime, setShowTime] = useState(false);
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [usluga, setUsluga] = useState("Njega lica");

  const [open, setOpen] = React.useState(false);

  const [time, setTime] = useState("");


  const handleClickToOpen = () => {
    setOpen(true);
  };

  const handleToClose = () => {
    setOpen(false);
  };

  const handleChange = (event) => {
    setUsluga(event.target.value); 
  };

 const createKorisnik = () => {
  if(!name || !lastName || !email){
    alert("Polja za ime, prezime i email moraju biti popunjena");
  }
  else if(!validator.isEmail(email)){
    alert("Unesite ispravan email");
  }
  else{
    Axios.post("http://localhost:3001/createKorisnik",{      
      ime: name,
      prezime: lastName,
      email: email,
      napomene: message,
      dan: date.toDateString(), 
      vrijeme: time,
      usluga: usluga,  
    }).then((response) => {
      setOpen(false);
    })  
    setOpen(false);
  }
    setName("");
    setLastName("");
    setEmail("");
    setMessage("");
  
}

  return (
    <div className="Calendar" >
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
          
            <Time showTime={showTime} handleClickToOpen={handleClickToOpen} setTime={setTime} />

          <Dialog open={open} onClose={handleToClose}>
            <DialogTitle>{"Unesite podatke"}</DialogTitle>

            <DialogContent>
              <DialogContentText>
                <div className="pocetna">
                  <div className="rezervisi">
                  <label>
                    Odaberite uslugu: 
                    <select value={usluga} onChange={handleChange}> 

                      <option 
                      usluga="Njega kose"
                      > 
                      Njega kose
                      </option>

                      <option 
                      usluga="Njega lica"
                      > 
                      Njega lica
                      </option>

                      <option 
                      usluga="Njega ruku i noktiju"
                      > 
                      Njega ruku i noktiju
                      </option>

                      <option 
                      usluga="Njega tijela"
                      > 
                      Njega tijela
                      </option>
                    </select>
                    </label>
                    <form>
                      <label>
                        Ime:
                        <input
                          type="text"
                          placeholder='Ime...'
                          style={{
                            color: "crimson",
                            lineHeight: 2,
                            padding: 7,
                          }}
                          name="ime"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </label>
                      <label>
                        Prezime:
                        <input
                          type="text"
                          placeholder='Prezime...'
                          style={{
                            color: "crimson",
                            lineHeight: 2,
                            padding: 7,
                          }}
                          lastname="Prezime"
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                        />
                      </label>
                      <label>
                        E-mail:
                        <input
                          type="text"
                          placeholder='E-mail...'
                          style={{
                            color: "crimson",
                            lineHeight: 2,
                            padding: 7,
                          }}
                          email="E-mail"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </label>
                      Napomene:
                      <textarea
                      placeholder='Unesite napomene...'
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
                    </form>
                  </div>          
                </div>                
              </DialogContentText>
            </DialogContent>

            <DialogActions>
              <Button onClick={createKorisnik} color="primary" autoFocus>
                <input
                  type="submit"
                  style={{
                    color: "crimson",
                    lineHeight: 2,
                    padding: 7,
                  }}
                  value="Rezerviši"
                />
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      </div>
    </div>
  );
}

export default Kalendar;

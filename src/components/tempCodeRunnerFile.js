        UDGAM
              </a>
              <a
                href="#"
                onClick={() => {
                  if (active && content === 2) {
                    setActive(false);
                    setChoosed(-1);
                    setContent(-1);
                  } else {
                    setContent(2);

                    setActive(true);
                  }
                }}
                id="event-dark2"
              >
                MASHAL
              </a>
            </div>
          </tbody>
        </table>
        {/* <div>events</div>
        <div>
          <div></div>
        </div> */}
      </div>
      <EventCard data={content} close={handleClose} />
      <div
        style={{
          position: "fixed",
          width: "100%",
          aliginItems: "center",
          bottom: "4%",
          marginBottom: "40px",
          height: "10%",
        }}
        className="fab-container"
      >
        <div
          className="fab-button"
          onClick={(e) => {
            if (active) {
              setActive(false);
              setChoosed(-1);
              setContent(-1);
            }
            ani(e);
            console.log("clicked");
          }}
        >
          <h2
            className="fab-button-text"
            style={{
              position: "relative",
              fontSize: "18px",
              textAlign: "center",
              margin: "auto 0",
            }}
          >
            EVENTS
          </h2>
          <h3
            className="fab-button-textX"
            style={{
              position: "relative",
              fontSize: "18px",
              textAlign: "center",
              margin: "auto 0",
            }}
          >
            X
          </h3>
        </div>
        <div
          className="fab-item1"
          onClick={() => {
            if (active && content === 0) {
              setActive(false);
              setChoosed(-1);
              setContent(-1);
            } else {
              setContent(0);

              setActive(true);
            }

            console.log("clicked UDYAM");
          }}
        >
          <h2
            style={{
              position: "relative",
              fontSize: "18px",
              textAlign: "center",
              margin: "auto 0",
            }}
            onClick={() => {
              if (active && content === 0) {
                setActive(false);
                setChoosed(-1);
                setContent(-1);
              } else {
                setContent(0);

                setActive(true);
              }
            }}
          >
            UDYAM
          </h2>
        </div>
        <div
          className="fab-item2"
          onClick={() => {
            if (active && content === 2) {
              setActive(false);
              setChoosed(-1);
              setContent(-1);
            } else {
              setContent(2);

              setActive(true);
            }
          }}
        >
          <h2
            style={{
              position: "relative",
              fontSize: "18px",
              textAlign: "center",
              margin: "auto 0",
            }}
          >
            MASHAL
          </h2>
        </div>
        <div
          className="fab-item3"
          onClick={() => {
            if (active && content === 1) {
              setActive(false);
              setChoosed(-1);
              setContent(-1);
            } else {
              setContent(1);

              setActive(true);
            }
          }}
        >
          <h2
            style={{
              position: "relative",
              fontSize: "18px",
              textAlign: "center",
              margin: "auto 0",
            }}
          >
            UDGAM
          </h2>
        </div>
      </div>
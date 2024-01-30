import React, { Component } from "react";
import "./index.css";

class AddProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      link: "",
      description: "",
      success: "",
    };
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const newProject = {
      name: this.state.name,
      link: this.state.link,
      description: this.state.description,
    };

    console.log(newProject);

    this.setState({
      name: "",
      link: "",
      description: "",
      success: "New project added successfully!",
    });
  };

  render() {
    return (
      <div style={{ width: "100%", height: "100%", position: "relative" }}>
        <div
          style={{
            left: 489,
            top: 132,
            position: "absolute",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: 56,
            display: "inline-flex",
          }}
        >
          <div
            style={{
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-end",
              gap: 24,
              display: "flex",
            }}
          >
            <div
              style={{
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                gap: 8,
                display: "flex",
              }}
            >
              <div
                style={{
                  width: 44,
                  height: 22,
                  justifyContent: "flex-end",
                  alignItems: "center",
                  display: "inline-flex",
                }}
              >
                <div
                  style={{
                    color: "#25282B",
                    fontSize: 16,
                    fontFamily: "Nunito",
                    fontWeight: "600",
                    wordWrap: "break-word",
                  }}
                >
                  Project Name
                </div>
              </div>
              <div
                style={{
                  width: 400,
                  height: 40,
                  position: "relative",
                  background: "white",
                  borderRadius: 8,
                  border: "1px #E8ECF4 solid",
                }}
              />
            </div>
            <div
              style={{
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                gap: 8,
                display: "flex",
              }}
            >
              <div
                style={{
                  width: 44,
                  height: 22,
                  justifyContent: "flex-end",
                  alignItems: "center",
                  display: "inline-flex",
                }}
              >
                <div
                  style={{
                    color: "#25282B",
                    fontSize: 16,
                    fontFamily: "Nunito",
                    fontWeight: "600",
                    wordWrap: "break-word",
                  }}
                >
                  Project link
                </div>
              </div>
              <div
                style={{
                  width: 400,
                  height: 40,
                  position: "relative",
                  background: "white",
                  borderRadius: 8,
                  border: "1px #E8ECF4 solid",
                }}
              />
            </div>
            <div
              style={{
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                gap: 8,
                display: "flex",
              }}
            >
              <div
                style={{
                  width: 44,
                  height: 22,
                  justifyContent: "flex-end",
                  alignItems: "center",
                  display: "inline-flex",
                }}
              >
                <div
                  style={{
                    color: "#25282B",
                    fontSize: 16,
                    fontFamily: "Nunito",
                    fontWeight: "600",
                    wordWrap: "break-word",
                  }}
                >
                  Description
                </div>
              </div>
              <div
                style={{
                  width: 400,
                  height: 160,
                  position: "relative",
                  background: "white",
                  borderRadius: 8,
                  border: "1px #E8ECF4 solid",
                }}
              />
            </div>
            <div
              style={{
                paddingLeft: 24,
                paddingRight: 24,
                paddingTop: 8,
                paddingBottom: 8,
                background: "#FDC435",
                borderRadius: 8,
                justifyContent: "flex-start",
                alignItems: "flex-start",
                display: "inline-flex",
              }}
            >
              <div
                style={{
                  color: "#25282B",
                  fontSize: 18,
                  fontFamily: "Roboto",
                  fontWeight: "500",
                  lineHeight: 27,
                  wordWrap: "break-word",
                }}
              >
                Add
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            left: 618,
            top: 0,
            position: "absolute",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: 4,
            display: "inline-flex",
          }}
        >
          <div
            style={{
              textAlign: "center",
              color: "#25282B",
              fontSize: 48,
              fontFamily: "Playfair Display",
              fontWeight: "700",
              lineHeight: 72,
              wordWrap: "break-word",
            }}
          >
            Add Project
          </div>
          <div
            style={{
              width: 100,
              height: 4,
              background: "#FDC435",
              borderRadius: 2,
            }}
          />
        </div>
        <div
          style={{
            left: 600,
            top: 2817,
            position: "absolute",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: 32,
            display: "inline-flex",
          }}
        >
          <div
            style={{
              justifyContent: "flex-start",
              alignItems: "flex-start",
              gap: 24,
              display: "inline-flex",
            }}
          >
            <div style={{ width: 48, height: 48, position: "relative" }}>
              <div
                style={{
                  width: 37.5,
                  height: 37.5,
                  left: 5.25,
                  top: 5.25,
                  position: "absolute",
                  background: "#25282B",
                }}
              ></div>
            </div>
            <div
              style={{
                width: 48,
                height: 48,
                padding: 5,
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
              }}
            >
              <div
                style={{ width: 38, height: 38, background: "#25282B" }}
              ></div>
            </div>
            <div
              style={{
                width: 48,
                height: 48,
                paddingLeft: 3,
                paddingRight: 3,
                paddingTop: 8,
                paddingBottom: 8,
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
              }}
            >
              <div
                style={{ width: 42, height: 32, background: "#25282B" }}
              ></div>
            </div>
          </div>
          <div
            style={{
              color: "#828282",
              fontSize: 16,
              fontFamily: "Nunito",
              fontWeight: "400",
              wordWrap: "break-word",
            }}
          >
            Copyright © 2024. All rights reserved
          </div>
        </div>
        <div
          style={{
            width: 457,
            height: 167,
            left: -44,
            top: 610,
            position: "absolute",
          }}
        />
        <div
          style={{
            width: 777,
            height: 877,
            left: 253,
            top: -2172,
            position: "absolute",
            background: "#FFC637",
          }}
        ></div>
        <div
          style={{
            width: 1436,
            height: 111.89,
            left: 0,
            top: 644,
            position: "absolute",
            background: "#FDC435",
          }}
        ></div>
      </div>
    );
  }
}

export default AddProject;

import React from "react";
import { FaSquare } from "react-icons/fa";
import { Header } from "../../components/Header";
import "./Vagas.css";

export const Vagas = () => {

  return (
    <>
      <Header />


      <div id="vagas" className="content">
        <div className="plane">
          <div className="select">
            <h1>Gerenciamento de vagas</h1>
          </div>
          <div className="num1">
            <FaSquare color="#5bfc60" style={{ margin: '-2px 2px', }} />
            <span className="num2">Dísponivel</span>
            <FaSquare color="red" style={{ margin: '-2px 2px', }} />
            <span className="num2" >Vaga ocupada</span>
            <FaSquare color="yellow" style={{ margin: '-2px 2px', }} />
            <span className="num2">Manutenção</span>
            <FaSquare color="gray" style={{ margin: '-2px 2px', }} />
            <span className="num2">Vaga em escolha</span>
          </div>

          <div className="num3">
            <h3>Numero de vagas :</h3>
          </div>
        </div>

        <ol>
          <li>
            <ol className="seats">
              <li className="seat" id="seat1">
                <input type="checkbox" id="1A" />
                <label for="1A">1A</label>
              </li>
              <li className="seat" id="seat2">
                <input type="checkbox" id="1B" />
                <label for="1B">2A</label>
              </li>
              <li className="seat" id="seat1">
                <input type="checkbox" id="1C" />
                <label for="1C">1C</label>
              </li>
              <li className="seat" id="seat2">
                <input type="checkbox" id="1D" />
                <label for="1D">1D</label>
              </li>
              <li className="seat" id="seat2">
                <input type="checkbox" id="1E" />
                <label for="1E">1E</label>
              </li>
              <li className="seat" id="seat1">
                <input type="checkbox" id="1F" />
                <label for="1F">1F</label>
              </li>
            </ol>
          </li>
          <li>
            <ol className="seats">
              <li className="seat" id="seat1">
                <input type="checkbox" id="2A" />
                <label for="2A">2A</label>
              </li>
              <li className="seat" id="seat2">
                <input type="checkbox" id="2B" />
                <label for="2B">2B</label>
              </li>
              <li className="seat" id="seat1">
                <input type="checkbox" id="2C" />
                <label for="2C">2C</label>
              </li>
              <li className="seat" id="seat1">
                <input type="checkbox" id="2D" />
                <label for="2D">2D</label>
              </li>
              <li className="seat" id="seat2">
                <input type="checkbox" id="2E" />
                <label for="2E">2E</label>
              </li>
              <li className="seat">
                <input type="checkbox" id="2F" />
                <label for="2F">2F</label>
              </li>
            </ol>
          </li>
          <li>
            <ol className="seats">
              <li className="seat" id="seat1">
                <input type="checkbox" id="3A" />
                <label for="3A">3A</label>
              </li>
              <li className="seat">
                <input type="checkbox" id="3B" />
                <label for="3B">3B</label>
              </li>
              <li className="seat">
                <input type="checkbox" id="3C" />
                <label for="3C">3C</label>
              </li>
              <li className="seat" id="seat1">
                <input type="checkbox" id="3D" />
                <label for="3D">3D</label>
              </li>
              <li className="seat">
                <input type="checkbox" id="3E" />
                <label for="3E">3E</label>
              </li>
              <li className="seat">
                <input type="checkbox" id="3F" />
                <label for="3F">3F</label>
              </li>
            </ol>
          </li>
          <li>
            <ol className="seats">
              <li className="seat" id="seat2">
                <input type="checkbox" id="4A" />
                <label for="4A">4A</label>
              </li>
              <li className="seat">
                <input type="checkbox" id="4B" />
                <label for="4B">4B</label>
              </li>
              <li className="seat" id="seat2">
                <input type="checkbox" id="4C" />
                <label for="4C">4C</label>
              </li>
              <li className="seat" id="seat2">
                <input type="checkbox" id="4D" />
                <label for="4D">4D</label>
              </li>
              <li className="seat" id="seat1">
                <input type="checkbox" id="4E" />
                <label for="4E">4E</label>
              </li>
              <li className="seat" id="seat1">
                <input type="checkbox" id="4F" />
                <label for="4F">4F</label>
              </li>
            </ol>
          </li>
          <li>
            <ol className="seats">
              <li className="seat" id="seat1">
                <input type="checkbox" id="5A" />
                <label for="5A">5A</label>
              </li>
              <li className="seat" id="seat1">
                <input type="checkbox" id="5B" />
                <label for="5B">5B</label>
              </li>
              <li className="seat" id="seat1">
                <input type="checkbox" id="5C" />
                <label for="5C">5C</label>
              </li>
              <li className="seat">
                <input type="checkbox" id="5D" />
                <label for="5D">5D</label>
              </li>
              <li className="seat">
                <input type="checkbox" id="5E" />
                <label for="5E">5E</label>
              </li>
              <li className="seat">
                <input type="checkbox" id="5F" />
                <label for="5F">5F</label>
              </li>
            </ol>
          </li>
          <li>
            <ol className="seats">
              <li className="seat">
                <input type="checkbox" id="6A" />
                <label for="6A">6A</label>
              </li>
              <li className="seat">
                <input type="checkbox" id="6B" />
                <label for="6B">6B</label>
              </li>
              <li className="seat">
                <input type="checkbox" id="6C" />
                <label for="6C">6C</label>
              </li>
              <li className="seat">
                <input type="checkbox" id="6D" />
                <label for="6D">6D</label>
              </li>
              <li className="seat">
                <input type="checkbox" id="6E" />
                <label for="6E">6E</label>
              </li>
              <li className="seat">
                <input type="checkbox" id="6F" />
                <label for="6F">6F</label>
              </li>
            </ol>
          </li>
          <li>
            <ol className="seats">
              <li className="seat">
                <input type="checkbox" id="7A" />
                <label for="7A">7A</label>
              </li>
              <li className="seat">
                <input type="checkbox" id="7B" />
                <label for="7B">7B</label>
              </li>
              <li className="seat">
                <input type="checkbox" id="7C" />
                <label for="7C">7C</label>
              </li>
              <li className="seat">
                <input type="checkbox" id="7D" />
                <label for="7D">7D</label>
              </li>
              <li className="seat">
                <input type="checkbox" id="7E" />
                <label for="7E">7E</label>
              </li>
              <li className="seat">
                <input type="checkbox" id="7F" />
                <label for="7F">7F</label>
              </li>
            </ol>
          </li>
          <li>
            <ol className="seats">
              <li className="seat">
                <input type="checkbox" id="8A" />
                <label for="8A">8A</label>
              </li>
              <li className="seat">
                <input type="checkbox" id="8B" />
                <label for="8B">8B</label>
              </li>
              <li className="seat">
                <input type="checkbox" id="8C" />
                <label for="8C">8C</label>
              </li>
              <li className="seat">
                <input type="checkbox" id="8D" />
                <label for="8D">8D</label>
              </li>
              <li className="seat">
                <input type="checkbox" id="8E" />
                <label for="8E">8E</label>
              </li>
              <li className="seat">
                <input type="checkbox" id="8F" />
                <label for="8F">8F</label>
              </li>
            </ol>
          </li>
          <li>
            <ol className="seats">
              <li className="seat">
                <input type="checkbox" id="9A" />
                <label for="9A">9A</label>
              </li>
              <li className="seat">
                <input type="checkbox" id="9B" />
                <label for="9B">9B</label>
              </li>
              <li className="seat">
                <input type="checkbox" id="9C" />
                <label for="9C">9C</label>
              </li>
              <li className="seat">
                <input type="checkbox" id="9D" />
                <label for="9D">9D</label>
              </li>
              <li className="seat">
                <input type="checkbox" id="9E" />
                <label for="9E">9E</label>
              </li>
              <li className="seat">
                <input type="checkbox" id="9F" />
                <label for="9F">9F</label>
              </li>
            </ol>
          </li>
          <li>
            <ol className="seats">
              <li className="seat">
                <input type="checkbox" id="10A" />
                <label for="10A">10A</label>
              </li>
              <li className="seat">
                <input type="checkbox" id="10B" />
                <label for="10B">10B</label>
              </li>
              <li className="seat">
                <input type="checkbox" id="10C" />
                <label for="10C">10C</label>
              </li>
              <li className="seat">
                <input type="checkbox" id="10D" />
                <label for="10D">10D</label>
              </li>
              <li className="seat">
                <input type="checkbox" id="10E" />
                <label for="10E">10E</label>
              </li>
              <li className="seat">
                <input type="checkbox" id="10F" />
                <label for="10F">10F</label>
              </li>
            </ol>
          </li>
        </ol>

        <div className="container_statics">
        </div>
      </div>
    </>




  );

}
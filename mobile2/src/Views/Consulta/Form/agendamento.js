import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import Container from "../../../Components/Container";
import Passos from "../../../Components/Passos";
import {
  Label,
  ContainerPassos,
  ContainerHorarios,
  Horarios,
  TextoHorario,
} from "../styles";

import { Calendar, CalendarList, Agenda } from "react-native-calendars";

import colors from "../../../Styles/colors";

import api from "../../../Services/api";

const CardHorarios = ({
  horarioSelecionado,
  setHorarioSelecionado,
  horariosDisponiveis,
  dia,
  diaSelecionado,
}) => {
  const [todasDatas, setTodasDatas] = useState();

  const pegarTodasDatas = () => {
    var datas = [];
    dia.forEach((item, index) => {
      datas.push(item.data);
    });
    setTodasDatas(datas);

    var filtred = datas.filter((el) => el === diaSelecionado);

    buscarHorarios(filtred)
  };

  const buscarHorarios = async (filtred) => {

  }

  useEffect(() => {
    pegarTodasDatas();
  }, []);

  return (
    <>
      {horariosDisponiveis.map((horario) => (
        <Horarios
          horarioSelecionado={horarioSelecionado}
          onPress={() => {
            setHorarioSelecionado(!horarioSelecionado);
            console.log(todasDatas);
          }}
        >
          <TextoHorario> {horario} </TextoHorario>
        </Horarios>
      ))}
    </>
  );
};

const Agendamento = () => {
  const [dia, setDia] = useState({});
  const [diaSelecionado, setDiaSelecionado] = useState();
  const [horarioSelecionado, setHorarioSelecionado] = useState(false);
  const [horariosDisponiveis, setHorariosDisponiveis] = useState([]);
  const [mostrarHorarios, setMostrarHorarios] = useState(false);

  const pegarDados = async () => {
    const retorno = await api.get(`/medico/1/consultas/dias`);

    setDia(retorno.data);
  };

  const iniciarHorarios = () => {
    var horarios = [];

    for (let i = 8; i <= 17; i++) {
      horarios.push(`${i}:00`);
    }

    setHorariosDisponiveis(horarios);
  };

  useEffect(() => {
    pegarDados();
    iniciarHorarios();
  }, []);

  return (
    <Container style={{ backgroundColor: colors.fundo }}>
      <ScrollView style={{ width: "100%" }}>
        <Passos cor1={true} cor2={true} cor3={true} cor4={true} />
        <Label> Agendamento </Label>
        <Calendar
          current={new Date()}
          // minDate={new Date()}
          maxDate={"2021-01-30"}
          onDayPress={(day) => {
            setDiaSelecionado(day.dateString);
            setMostrarHorarios(true);
          }}
          markedDates={{
            // [dia.dateString]: {
            //   selected: true,
            //   selectedColor: colors.principal,
            // },

            "2020-11-24": {
              marked: true,
              disabled: true,
              disableTouchEvent: true,
            },
          }}
          // Callback which gets executed when visible months change in scroll view. Default = undefined
          // onVisibleMonthsChange={(months) => {
          //   console.log("now these months are visible", months);
          // }}
          scrollEnabled={true}
          // Enable or disable vertical scroll indicator. Default = false
        />
        <Label> Horários </Label>
        <ContainerHorarios>
          <ScrollView horizontal={true}>
            {mostrarHorarios ? (
              <CardHorarios
                horarioSelecionado={horarioSelecionado}
                setHorarioSelecionado={setHorarioSelecionado}
                horariosDisponiveis={horariosDisponiveis}
                dia={dia}
                diaSelecionado={diaSelecionado}
              />
            ) : (
              <Container style={{ backgroundColor: colors.fundo }}>
                <Text>
                  {" "}
                  Selecione um dia no calendário para {"\n"} ver os horários{" "}
                </Text>
              </Container>
            )}
          </ScrollView>
        </ContainerHorarios>
      </ScrollView>
    </Container>
  );
};

export default Agendamento;

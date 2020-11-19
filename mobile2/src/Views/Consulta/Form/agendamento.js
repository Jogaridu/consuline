import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import Container from "../../../Components/Container";
import Botao from "../../../Components/Botao2";
import Passos from "../../../Components/Passos";
import {
  Label,
  ContainerPassos,
  ContainerHorarios,
  Horarios,
  TextoHorario,
  ContainerBotaoCadastro,
} from "../styles";

import { Calendar, CalendarList, Agenda } from "react-native-calendars";

import colors from "../../../Styles/colors";

import api from "../../../Services/api";

const CardHorarios = ({
  horarioSelecionado,
  setHorarioSelecionado,
  dia,
  diaSelecionado,
}) => {
  const [todasDatas, setTodasDatas] = useState();
  const [horariosDisponiveis, setHorariosDisponiveis] = useState([]);

  const iniciarHorarios = () => {
    var horarios = [];

    for (let i = "08"; i <= 17; i++) {
      if (!diaSelecionado || !diaSelecionado.horario.includes(`${i}:00`)) {
        horarios.push(`${i}:00`);
      }
    }
    // console.log(diaSelecionado.horario[0].length);
    setHorariosDisponiveis(horarios);
  };

  useEffect(() => {
    iniciarHorarios();
  }, [diaSelecionado]);

  return (
    <>
      {horariosDisponiveis.map((horario) => (
        <Horarios
          horarioSelecionado={horarioSelecionado}
          onPress={() => {
            setHorarioSelecionado(!horarioSelecionado);
            console.log(diaSelecionado);
          }}
        >
          <TextoHorario> {horario} </TextoHorario>
        </Horarios>
      ))}
    </>
  );
};

const Agendamento = ({ navigation, route }) => {
  const [dia, setDia] = useState({});
  const [diaSelecionado, setDiaSelecionado] = useState();
  const [marcador, setMarcador] = useState(false);
  const [horarioSelecionado, setHorarioSelecionado] = useState(false);
  const [mostrarHorarios, setMostrarHorarios] = useState();

  const pegarDados = async () => {
    const idMedico = route.params;
    const retorno = await api.get(`/medico/${idMedico}/consultas/dias`);

    setDia(retorno.data);
  };

  useEffect(() => {
      pegarDados();
  }, []);

  const navegarPagamento = () => {
    navigation.navigate("");
  };

  return (
    <Container style={{ backgroundColor: colors.fundo }}>
      <ScrollView style={{ width: "100%" }}>
        <Passos cor1={true} cor2={true} cor3={true} cor4={true} />
        <Label> Agendamento </Label>

            <Calendar
              current={new Date()}
              minDate={new Date()}
              maxDate={"2021-01-30"}
              onDayPress={(day) => {
                const [diaSel] = dia.filter((d) => {
                  return d.data == day.dateString;
                });

                setDiaSelecionado(diaSel);
                setMostrarHorarios(true);
                setMarcador(day.dateString);
                console.log(diaSel);
              }}
              markedDates={{
                [marcador]: {
                  selected: true,
                  selectedColor: colors.principal,
                },

                "2020-11-24": {
                  marked: true,
                  disabled: true,
                  disableTouchEvent: true,
                },
              }}
              scrollEnabled={true}
            />
            <Label> Horários </Label>
            <ContainerHorarios>
              <ScrollView horizontal={true}>
                {mostrarHorarios ? (
                  <CardHorarios
                    horarioSelecionado={horarioSelecionado}
                    setHorarioSelecionado={setHorarioSelecionado}
                    dia={dia}
                    diaSelecionado={diaSelecionado}
                  />
                ) : (
                  <Container style={{ backgroundColor: colors.fundo }}>
                    <Text>
                      Selecione um dia no calendário para {"\n"} ver os horários
                    </Text>
                  </Container>
                )}
              </ScrollView>
            </ContainerHorarios>

            <ContainerBotaoCadastro>
              <Botao title="Próximo" />
            </ContainerBotaoCadastro>

      </ScrollView>
    </Container>
  );
};

export default Agendamento;

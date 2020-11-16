import React, { useState } from "react";
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

const Agendamento = () => {
  const [dia, setDia] = useState({});
  const [selecionado, setSelecionado] = useState(false);

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
            setDia(day);
          }}
          markedDates={{
            [dia.dateString]: {
              selected: true,
              selectedColor: colors.principal,
            },

            "2020-11-24": {
              marked: true,
              disabled: true,
              disableTouchEvent: true,
            },
            "2020-11-25": {
              marked: true,
              disabled: true,
              disableTouchEvent: true,
            },
            "2020-11-26": {
              marked: true,
              disabled: true,
              disableTouchEvent: true,
            },
          }}
          // Callback which gets executed when visible months change in scroll view. Default = undefined
          onVisibleMonthsChange={(months) => {
            console.log("now these months are visible", months);
          }}
          scrollEnabled={true}
          // Enable or disable vertical scroll indicator. Default = false
        />
        <Label> Horário </Label>
        <ContainerHorarios>
          <Horarios selecionado={selecionado} onPress={() => setSelecionado(!selecionado)}>
            <TextoHorario> 8:00 </TextoHorario>
          </Horarios>
          <Horarios selecionado={selecionado} onPress={() => setSelecionado(!selecionado)}>
            <TextoHorario> 13:00 </TextoHorario>
          </Horarios>
          <Horarios selecionado={selecionado} onPress={() => setSelecionado(!selecionado)}>
            <TextoHorario> 19:00 </TextoHorario>
          </Horarios>
          <Horarios selecionado={selecionado} onPress={() => setSelecionado(!selecionado)}>
            <TextoHorario> 20:00 </TextoHorario>
          </Horarios>
          <Horarios selecionado={selecionado} onPress={() => setSelecionado(!selecionado)}>
            <TextoHorario> 16:00 </TextoHorario>
          </Horarios>
          <Horarios selecionado={selecionado} onPress={() => setSelecionado(!selecionado)}>
            <TextoHorario> 12:00 </TextoHorario>
          </Horarios>
        </ContainerHorarios>
      </ScrollView>
    </Container>
  );
};

export default Agendamento;

 // intotal there should be three rounds of test trials. Each test trial contains 10 trials, between each round there is a five-minute break
 // preceding the test trials is the practice trial including two practices
 // participants are supposed to understand their tasks. Before doing practices, they are informed that there is no need to hurry in doing practice.
 // in doing practices participants are expected to raise hand if they feel confused
 // test trials can start only when participants understand their tasks
 // experimenter should not talk with participant during the break between rounds of test trials
 //constants
const TODAY = new Date();
const DD = String(TODAY.getDate()).padStart(2, '0');
const MM = String(TODAY.getMonth() + 1).padStart(2, '0');
const YYYY = TODAY.getFullYear();
const DATE = DD + MM + YYYY;

const timeline = [];

const jsPsych = initJsPsych({
    override_safe_mode: true,
    use_webaudio: false,
    //data here refers to the data produced when a participant interacts with the platform
    /*
        jsPsych automatically record information about when the participant clicks on a window that is
        not experiment, and about the participant exits full screen mode if the experiment is running in 
        full screen mode. This data is stored separately.
     */
    on_interaction_data_update: (data) => {
         //get the main trial data
        const trial = jsPsych.getCurrentTrial();
        console.log(data);
        console.log(trial);
         //trial.event = data.event;
        
    }, 
    
    on_finish: () => {
        //alert("Problem occurred while writing data to Dropbox. " +
            //"Yet data will be saved to this computer. " +
            //"Please contact the experimenter regarding this issue!")
        const csv = jsPsych.data.get().csv();
        const filename = jsPsych.data.get().values()[1].osaleja_nr + "_" + DATE + ".csv";
        downloadCSV(csv, filename);
        //jsPsych.data.displayData('csv');

        //window.location.href = "finish";
    },
});

const timeline_var_round_1_S = [
    {sound: '../../audioStimuli/tests/withContrast/round_1/test_1_S.WAV'},
    {sound: '../../audioStimuli/tests/withContrast/round_1/test_2_S.WAV'},
    {sound: '../../audioStimuli/tests/withContrast/round_1/test_3_S.WAV'},
    {sound: '../../audioStimuli/tests/withContrast/round_1/test_4_S.WAV'},
    {sound: '../../audioStimuli/tests/withContrast/round_1/test_5_S.WAV'},
    {sound: '../../audioStimuli/tests/withContrast/round_1/test_6_S.WAV'},
    {sound: '../../audioStimuli/tests/withContrast/round_1/test_7_S.WAV'},
    {sound: '../../audioStimuli/tests/withContrast/round_1/test_8_S.WAV'},
    {sound: '../../audioStimuli/tests/withContrast/round_1/test_9_S.WAV'},
    {sound: '../../audioStimuli/tests/withContrast/round_1/test_10_S.WAV'},
]

const timeline_var_round_2_S = [
    {sound: '../../audioStimuli/tests/withContrast/round_2/test_11_S.WAV'},
    {sound: '../../audioStimuli/tests/withContrast/round_2/test_12_S.WAV'},
    {sound: '../../audioStimuli/tests/withContrast/round_2/test_13_S.WAV'},
    {sound: '../../audioStimuli/tests/withContrast/round_2/test_14_S.WAV'},
    {sound: '../../audioStimuli/tests/withContrast/round_2/test_15_S.WAV'},
    {sound: '../../audioStimuli/tests/withContrast/round_2/test_16_S.WAV'},
    {sound: '../../audioStimuli/tests/withContrast/round_2/test_17_S.WAV'},
    {sound: '../../audioStimuli/tests/withContrast/round_2/test_18_S.WAV'},
    {sound: '../../audioStimuli/tests/withContrast/round_2/test_19_S.WAV'},
    {sound: '../../audioStimuli/tests/withContrast/round_2/test_20_S.WAV'},
]

const timeline_var_round_3_S = [
    {sound: '../../audioStimuli/tests/withContrast/round_3/test_21_S.WAV'},
    {sound: '../../audioStimuli/tests/withContrast/round_3/test_22_S.WAV'},
    {sound: '../../audioStimuli/tests/withContrast/round_3/test_23_S.WAV'},
    {sound: '../../audioStimuli/tests/withContrast/round_3/test_24_S.WAV'},
    {sound: '../../audioStimuli/tests/withContrast/round_3/test_25_S.WAV'},
    {sound: '../../audioStimuli/tests/withContrast/round_3/test_26_S.WAV'},
    {sound: '../../audioStimuli/tests/withContrast/round_3/test_27_S.WAV'},
    {sound: '../../audioStimuli/tests/withContrast/round_3/test_28_S.WAV'},
    {sound: '../../audioStimuli/tests/withContrast/round_3/test_29_S.WAV'},
    {sound: '../../audioStimuli/tests/withContrast/round_3/test_30_S.WAV'},
]

const timeline_var_practice_S = [
    {sound: '../../audioStimuli/practices/withContrast/practice_1_S.WAV'}, 
    {sound: '../../audioStimuli/practices/withContrast/practice_2_S.WAV'},
]

const timeline_var_practice_J = [
    {sound: '../../audioStimuli/practices/withOnlyEst/practice_1_J.WAV'},
    {sound: '../../audioStimuli/practices/withOnlyEst/practice_2_J.WAV'},
]

const timeline_var_round_1_J = [
    {sound: '../../audioStimuli/tests/withOnlyEst/round_1/test_1_J.WAV'},
    {sound: '../../audioStimuli/tests/withOnlyEst/round_1/test_2_J.WAV'},
    {sound: '../../audioStimuli/tests/withOnlyEst/round_1/test_3_J.WAV'},
    {sound: '../../audioStimuli/tests/withOnlyEst/round_1/test_4_J.WAV'},
    {sound: '../../audioStimuli/tests/withOnlyEst/round_1/test_5_J.WAV'},
    {sound: '../../audioStimuli/tests/withOnlyEst/round_1/test_6_J.WAV'},
    {sound: '../../audioStimuli/tests/withOnlyEst/round_1/test_7_J.WAV'},
    {sound: '../../audioStimuli/tests/withOnlyEst/round_1/test_8_J.WAV'},
    {sound: '../../audioStimuli/tests/withOnlyEst/round_1/test_9_J.WAV'},
    {sound: '../../audioStimuli/tests/withOnlyEst/round_1/test_10_J.WAV'},
]

const timeline_var_round_2_J = [
    {sound: '../../audioStimuli/tests/withOnlyEst/round_2/test_11_J.WAV'},
    {sound: '../../audioStimuli/tests/withOnlyEst/round_2/test_12_J.WAV'},
    {sound: '../../audioStimuli/tests/withOnlyEst/round_2/test_13_J.WAV'},
    {sound: '../../audioStimuli/tests/withOnlyEst/round_2/test_14_J.WAV'},
    {sound: '../../audioStimuli/tests/withOnlyEst/round_2/test_15_J.WAV'},
    {sound: '../../audioStimuli/tests/withOnlyEst/round_2/test_16_J.WAV'},
    {sound: '../../audioStimuli/tests/withOnlyEst/round_2/test_17_J.WAV'},
    {sound: '../../audioStimuli/tests/withOnlyEst/round_2/test_18_J.WAV'},
    {sound: '../../audioStimuli/tests/withOnlyEst/round_2/test_19_J.WAV'},
    {sound: '../../audioStimuli/tests/withOnlyEst/round_2/test_20_J.WAV'},
]

const timeline_var_round_3_J = [
    {sound: '../../audioStimuli/tests/withOnlyEst/round_3/test_21_J.WAV'},
    {sound: '../../audioStimuli/tests/withOnlyEst/round_3/test_22_J.WAV'},
    {sound: '../../audioStimuli/tests/withOnlyEst/round_3/test_23_J.WAV'},
    {sound: '../../audioStimuli/tests/withOnlyEst/round_3/test_24_J.WAV'},
    {sound: '../../audioStimuli/tests/withOnlyEst/round_3/test_25_J.WAV'},
    {sound: '../../audioStimuli/tests/withOnlyEst/round_3/test_26_J.WAV'},
    {sound: '../../audioStimuli/tests/withOnlyEst/round_3/test_27_J.WAV'},
    {sound: '../../audioStimuli/tests/withOnlyEst/round_3/test_28_J.WAV'},
    {sound: '../../audioStimuli/tests/withOnlyEst/round_3/test_29_J.WAV'},
    {sound: '../../audioStimuli/tests/withOnlyEst/round_3/test_30_J.WAV'},
]

 //create a welcome screen
const welcomeScreen = {
    type: jsPsychHtmlButtonResponse,
    stimulus: '<p>Tere osalemast katses!</p>',
    choices: ['Jätka'],

}

timeline.push(welcomeScreen);

const preload = {
    type: jsPsychPreload,
    auto_preload: true,
}

timeline.push(preload);

const preloadConfirm = {
    type: jsPsychHtmlButtonResponse,
    stimulus: '<p>Kõik helistiimulid on eellaaditud</p>',
    choices: ['Kinnita ja jätka'],
}

timeline.push(preloadConfirm);

const participant_nr = {
    data: {
        screen_id: "welcome_screen",
    },
    type: jsPsychSurveyHtmlForm,
    Preamble: "<p>Lugege ja kinnitage nõusolek järgmisel lehel</p>",
    html: '<p>Osaleja kood: <input name="osaleja_nr" type="text" /></p>',
    button_label: "Jätka",
    on_finish: function(data) {
        console.log(data.response)
         //data.response = JSON.parse(data.response)
        jsPsych.data.addProperties({
            osaleja_nr: data.response.osaleja_nr,
            ID_kuupäev: data.response.osaleja_nr + "_" + DATE, //new added, 7.mar
        })
    }
}

timeline.push(participant_nr);

// split the main timeline into two separate branches



/*
const conditionSelect = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: '<p>Sisestage oma osalejanumbri viimane täht, vajutades klahvi <b>s</b> või <b>j</b>.</p>'
}
timeline.push(conditionSelect)*/

const instruction_junior = {
    type: jsPsychSurveyHtmlForm,
    Preamble: "<p>Informeerimise ja teadliku nõusoleku vorm Uurimistöö nimetus: Pilootuuring leksikaalsetest valikutest</p>",
    html: `
        <div style="width: 880px; padding: 20px; border: solid black 2px; font-size: 20px">
            <h3>Hea arstiteaduse tudeng,</h3>
            <p>Katse koosneb kahest osast, proovikatsetest ja katsetest. Proovikatse sisaldab kaks proovi. Proovikatse käigus saate katseläbiviijalt küsida kõike, mis jääb teile segaseks. Katseläbiviija aitab teil oma ülesandeid täielikult mõista. Seetõttu pole tarvis harjutuste lõpetamisega kiirustada.<p/> 
            <p>Katse sisaldab kolm osa. Iga osa lõpetamise järel on viieminutiline paus, mille jooksul saab puhata ja vett juua.</p>
            <p>Teie ülesandeks on</p>
            <ul>
                <li>kuulata hoolega heli, mis algab teatud mõistele viitava sõnaga nt <i>maksapõletik on ...</i> . Peale selle on heli sisuks selle mõiste kirjeldus kolme lause raames (umbes 20-25 sekundit);</li>
                <li>Rääkides, määrata selle mõiste viitava sõna kindlaks ja rääkida valjusti, mida sa kuulsid, niipea kui heli lõpeb. Heli lõppemise signaaliks on kaks ekraanile ilmuvat küsimust <i>„Millist mõistet kirjeldati? Mida kuulsite?“</i>;</li>
                <li>Jätkamiseks klõpsake nuppu „Lõpeta“, kui olete veendunud, et olete sõna valimise ja kuuldu kirjeldamise lõpetanud.</li>
            </ul>
        </div>
    `,
    button_label: "Jätka",
}

const openMic_J = {
    type: jsPsychInitializeMicrophone,
}

const beforePractice_J = {
    type: jsPsychHtmlButtonResponse,
    stimulus: '<p>On aeg end proovide kaudu oma ülesannetega kurssi viia. Pakutakse kaks proovi. Alustamiseks klõpsake.</p>',
    choices: ['Jätka']
}

const practiceTrial_J = {
    type: jsPsychAudioKeyboardResponse,
    stimulus: jsPsych.timelineVariable('sound'),
    trial_ends_after_audio: true,
    choices: 'NO_KEYS',
}

const practiceTrialResponse_J = {
    type: jsPsychHtmlAudioResponse,
    stimulus: `
        <p>Millist mõistet kirjeldati?</p>
        <p>Mida kuulsite?</p>
    `,
    recording_duration: 360000,
    show_done_button: true,
    done_button_label: "Lõpeta",
    data: {
        sound: jsPsych.timelineVariable('sound'),
    },
}

const practiceProcedure_J = {
    timeline: [beforePractice_J, practiceTrial_J, practiceTrialResponse_J],
    timeline_variables: timeline_var_practice_J,
}

const beforeTest_J = {
    type: jsPsychHtmlButtonResponse,
    stimulus: '<p>On aeg alustada katsetega. Katse sisaldab kolm osa ja osade vahel on kaks pausi. Iga osa käigus ei saa te peatuda, lõppenud osa juurde tagasi minna ega eelmises tulemuses muudatusi teha. klõpsake alustamiseks nuppu.</p>',
    choices: ['Jätka']
}

const audioTrial_J = {
    type: jsPsychAudioKeyboardResponse,
    stimulus: jsPsych.timelineVariable('sound'),
    trial_ends_after_audio: true,
    choices: 'NO_KEYS',
}

const audioResponse_J = {
    type: jsPsychHtmlAudioResponse,
    stimulus: `
        <p><b>Millist mõistet kirjeldati?</b></p>
        <p><b>Mida kuulsite?</b></p>
    `,
    recording_duration: 360000,
    show_done_button: true,
    done_button_label: "Lõpeta",
    data: {
        sound: jsPsych.timelineVariable('sound'),
    },
}

const testProcedure_1_J = {
    timeline: [beforeTest_J, audioTrial_J, audioResponse_J],
    timeline_variables:  timeline_var_round_1_J,
}

const pause1_5_J = {
    type: jsPsychSketchpad,
    prompt: '<p>Nüüd on teil viieminutiline paus. Tulge tagasi enne pausi lõppu. Saate selle pausi vahele jätta ja jätkata, klõpsates nuppu.</p>',
    trial_duration: 300000,
    show_countdown_trial_duration: true,
    show_finished_button: true,
    finished_button_label: "Lõpeta pausi ja jätka",
    countdown_timer_html: '<span id="sketchpad-timer"></span> järelejäänud'
}

const testProcedure_2_J = {
    timeline: [beforeTest_J, audioTrial_J, audioResponse_J],
    timeline_variables: timeline_var_round_2_J,
}

/*
const pause2_5_J = {
    type: jsPsychSketchpad,
    prompt: '<p>Nüüd on teil viieminutine paus. Tulge tagasi enne pausi lõppu. Saate selle etapi vahele jätta ja jätkata, klõpsates nuppu.</p>',
    trial_duration: 300000,
    show_countdown_trial_duration: true,
    show_finished_button: true,
    finnished_button_label: "Lõpeta pausi ja jätka"
}*/

const testProcedure_3_J = {
    timeline: [beforeTest_J, audioTrial_J, audioResponse_J],
    timeline_variables: timeline_var_round_3_J,
}


const katse_lõpp_J = {
    type: jsPsychHtmlButtonResponse,
    stimulus: '<p>Tänu osalemast</p>',
    choices: ['Lahku'],
}

const timeline_branch_J = [
    instruction_junior, 
    openMic_J, 
    practiceProcedure_J,  
    testProcedure_1_J,
    pause1_5_J,
    testProcedure_2_J,
    pause1_5_J,
    testProcedure_3_J,
    katse_lõpp_J,
]

const choice_Trial = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: '<p>Sisestage oma osaleja koodi viimane täht, vajutades klahvi <b>s</b> või <b>j</b>.</p>',
    choices: ['j','s'],
    on_finish: (data) => {
        switch(data.response) {
            case 'j':
                timeline.push(timeline_branch_J);
                break;
            case 's':
                timeline.push(timeline_branch_S);
                break;
        }
    }
}

timeline.push(choice_Trial)

/*
const if_node = {
    timeline: [
        instruction_junior, 
        openMic_J, 
        practiceProcedure_J,  
        testProcedure_1_J,
        pause1_5_J,
        testProcedure_2_J,
        pause1_5_J,
        testProcedure_3_J,
        //katse_lõpp_J,
    ],
    conditional_function: function() {
        const data = jsPsych.data.get().last(1).values()[0];
        console.log(data)
        if (jsPsych.pluginAPI.compareKeys(data.response, 's')) {
            return false
        } else {
            return true;
        }
    }
}

timeline.push(if_node);*/

// another section for another group
const instruction_senior = {
    type: jsPsychSurveyHtmlForm,
    Preamble: "<p>Informeerimise ja teadliku nõusoleku vorm Uurimistöö nimetus: Pilootuuring leksikaalsetest valikutest</p>",
    html: `
        <div style="width: 880px; padding: 20px; border: solid black 2px; font-size: 20px">
            <h3>Hea arstiteaduse tudeng,</h3>
            <p>Katse koosneb kahest osast, proovikatsetest ja katsetest. Proovikatse sisaldab kaks proovi. Proovikatse käigus saate katseläbiviijalt küsida kõike, mis jääb teile segaseks. Katseläbiviija aitab teil oma ülesandeid täielikult mõista. Seetõttu pole tarvis harjutuste lõpetamisega kiirustada.<p/> 
            <p>Katse sisaldab kolm osa. Iga osa lõpetamise järel on viieminutiline paus, mille jooksul saab puhata ja vett juua.</p>
            <p>Teie ülesandeks on</p>
            <ul>
                <li>kuulata hoolega heli, mis algab kahe sama mõistele viitava sõnaga <b>„A ehk B“</b> struktuuris nt <i>maksapõletik ehk hepatiit</i> või <i>hepatiit ehk maksapõletik</i>. Peale selle on heli sisuks selle mõiste kirjeldus kolme lause raames (umbes 20-25 sekundit);</li>
                <li>Rääkides, teha kahe sõna vahel sõnavalik ja rääkida valjusti, mida sa kuulsid, niipea kui heli lõpeb. Heli lõppemise signaaliks on kaks ekraanile ilmuvat küsimust <i>„Millist mõistet kirjeldati? Mida kuulsite?“</i>;</li>
                <li>Jätkamiseks klõpsake nuppu „Lõpeta“, kui olete veendunud, et olete sõna valimise ja kuuldu kirjeldamise lõpetanud.</li>
            </ul>
        </div>
    `,
    button_label: "Jätka",
}

const openMic_S = {
    type: jsPsychInitializeMicrophone,
}

const beforePractice_S = {
    type: jsPsychHtmlButtonResponse,
    stimulus: '<p>On aeg end proovide kaudu oma ülesannetega kurssi viia. Pakutakse kaks proovi. Alustamiseks klõpsake.</p>',
    choices: ['Jätka']
}

const practiceTrial_S = {
    type: jsPsychAudioKeyboardResponse,
    stimulus: jsPsych.timelineVariable('sound'),
    trial_ends_after_audio: true,
    choices: 'NO_KEYS',
}

const practiceTrialResponse_S = {
    type: jsPsychHtmlAudioResponse,
    stimulus: `
        <p><b>Millist mõistet kirjeldati?</b></p>
        <p><b>Mida kuulsid?</b></p>
    `,
    recording_duration: 360000,
    show_done_button: true,
    done_button_label: "Lõpeta",
    data: {
        sound: jsPsych.timelineVariable('sound'),
    },
}

const practiceProcedure_S = {
    timeline: [beforePractice_S, practiceTrial_S, practiceTrialResponse_S],
    timeline_variables: timeline_var_practice_S,
}

const beforeTest_S = {
    type: jsPsychHtmlButtonResponse,
    stimulus: '<p>On aeg alustada katsetega. Katse sisaldab kolm osa ja osade vahel on kaks pausi. Iga osa käigus ei saa te peatuda, lõppenud osa juurde tagasi minna ega eelmises tulemuses muudatusi teha. klõpsake alustamiseks nuppu.</p>',
    choices: ['Jätka']
}

const audioTrial_S = {
    type: jsPsychAudioKeyboardResponse,
    stimulus: jsPsych.timelineVariable('sound'),
    trial_ends_after_audio: true,
    choices: 'NO_KEYS',
}

const audioResponse_S = {
    type: jsPsychHtmlAudioResponse,
    stimulus: `
        <p><b>Millist mõistet kirjeldati?</b></p>
        <p><b>Mida kuulsid?</b></p>
    `,
    recording_duration: 360000,
    show_done_button: true,
    done_button_label: "Lõpeta",
    data: {
        sound: jsPsych.timelineVariable('sound'),
    },
}

const testProcedure_1 = {
    timeline: [beforeTest_S, audioTrial_S, audioResponse_S],
    timeline_variables: timeline_var_round_1_S,
}

const pause1_5_S = {
    type: jsPsychSketchpad,
    prompt: '<p>Nüüd on teil viieminutiline paus. Tulge tagasi enne pausi lõppu. Saate selle pausi vahele jätta ja jätkata, klõpsates nuppu.</p>',
    trial_duration: 300000,
    show_countdown_trial_duration: true,
    show_finished_button: true,
    finished_button_label: "Lõpeta pausi ja jätka",
    countdown_timer_html: '<span id="sketchpad-timer"></span> järelejäänud'
}

const testProcedure_2 = {
    timeline: [beforeTest_S, audioTrial_S, audioResponse_S],
    timeline_variables: timeline_var_round_2_S,
}

const testProcedure_3 = {
    timeline: [beforeTest_S, audioTrial_S, audioResponse_S],
    timeline_variables: timeline_var_round_3_S,
}


const katse_lõpp_S = {
    type: jsPsychHtmlButtonResponse,
    stimulus: '<p>Tänu osalemast</p>',
    choices: ['Lahku'],
}

const timeline_branch_S = [
    instruction_senior,
    openMic_S,
    practiceProcedure_S,
    testProcedure_1,
    pause1_5_S,
    testProcedure_2,
    pause1_5_S,
    testProcedure_3,
    katse_lõpp_S
]

/*
const if_node_case_2 = {
    timeline: [
        instruction_senior,
        openMic_S,
        practiceProcedure_S,
        testProcedure_1,
        pause1_5_S,
        testProcedure_2,
        pause1_5_S,
        testProcedure_3,
        //katse_lõpp_S
    ],
    conditional_function: function() {
        const data = jsPsych.data.get().last(1).values()[0];
        console.log(data)
        if (jsPsych.pluginAPI.compareKeys(data.response, 'j')) {
            return false
        } else {
            return true
        }
    }
}

timeline.push(if_node_case_2);*/

/*
const instruction_senior = {
    type: jsPsychSurveyHtmlForm,
    Preamble: "<p>Informeerimise ja teadliku nõusoleku vorm Uurimistöö nimetus: Pilootuuring leksikaalsetest valikutest</p>",
    html: `
        <div style="width: 880px; padding: 20px; border: solid black 2px; font-size: 20px">
            <h3>Hea arstiteaduse tudeng,</h3>
            <p>Katse koosneb harjutuskatsetest ja katsetest, kõigest hoolimata on ülesanded saama. Harjutuskatse käigus saate katsekorraldajalt küsida kõike, mis teile segaseks jääb. Korraldaja aitab teile oma ülesandeid täielikult mõista. Seetõttu ärge kiirustage harjutusi lõpetama.<p/> 
            <p>Harjutuskatse sisaldab kaks heli. Katse on jagatud kolme rühma. Rühmade vahel on viieminutiline paus, mille jooksul saab kurgu puhata juua.</p>
            <p>Teie ülesandeks on</p>
            <ul>
                <li>kuulata hoolega heli, mis algab kahe sama mõistele viitava sõnaga <b>„A ehk B“</b> struktuuris nt <i>maksapõletik ehk hepatiit</i> või <i>hepatiit ehk maksapõletik</i>. Peale selle on heli sisuks selle mõiste kirjeldus kolme lause raames (umbes 20-25 sekundit);</li>
                <li>Rääkides, teha kahe sõna vahel sõnavalik ja rääkida valjusti, mida sa kuulsid, niipea kui heli lõpeb. Heli lõppemise signaaliks on kaks ekraanile ilmuvat küsimust <i>„Millist mõistet kirjeldati? Mida kuulsite?“</i>;</li>
                <li>Jätkamiseks klõpsake nuppu „Lõpeta“, kui olete veendunud, et olete sõna valimise ja kuuldu kirjeldamise lõpetanud.</li>
            </ul>
        </div>
    `,
    button_label: "Jätka",
}

timeline.push(instruction_senior);
*/

/*
const openMic_S = {
    type: jsPsychInitializeMicrophone,
}

timeline.push(openMic_S);*/

 //add one practice procedure

/*
const beforePractice_S = {
    type: jsPsychHtmlButtonResponse,
    stimulus: '<p>On aeg oma ülesannetega läbi harjutuste tutvuda. On kaks harjutust. Alustamiseks klõpsake.</p>',
    choices: ['Jätka']
}

const practiceTrial_S = {
    type: jsPsychAudioKeyboardResponse,
    stimulus: jsPsych.timelineVariable('sound'),
    trial_ends_after_audio: true,
    choices: 'NO_KEYS',
}

const practiceTrialResponse_S = {
    type: jsPsychHtmlAudioResponse,
    stimulus: `
        <p><b>Millist mõistet kirjeldati?</b></p>
        <p><b>Mida kuulsid?</b></p>
    `,
    recording_duration: 360000,
    show_done_button: true,
    done_button_label: "Lõpeta",
    data: {
        sound: jsPsych.timelineVariable('sound'),
    },
}

const practiceProcedure_S = {
    timeline: [beforePractice_S, practiceTrial_S, practiceTrialResponse_S],
    timeline_variables: timeline_var_practice_S,
}

timeline.push(practiceProcedure_S)*/

/*
const beforeTest_S = {
    type: jsPsychHtmlButtonResponse,
    stimulus: '<p>On aeg alustada testkatsetega. Alustamiseks klõpsake.</p>',
    choices: ['Jätka']
}

const audioTrial_S = {
    type: jsPsychAudioKeyboardResponse,
    stimulus: jsPsych.timelineVariable('sound'),
    trial_ends_after_audio: true,
    choices: 'NO_KEYS',
}

const audioResponse_S = {
    type: jsPsychHtmlAudioResponse,
    stimulus: `
        <p><b>Millist mõistet kirjeldati?</b></p>
        <p><b>Mida kuulsid?</b></p>
    `,
    recording_duration: 360000,
    show_done_button: true,
    done_button_label: "Lõpeta",
    data: {
        sound: jsPsych.timelineVariable('sound'),
    },
}

const testProcedure_1 = {
    timeline: [beforeTest_S, audioTrial_S, audioResponse_S],
    timeline_variables: timeline_var_round_1_S,
}

timeline.push(testProcedure_1);*/

/*
const pause1_5_S = {
    type: jsPsychSketchpad,
    prompt: '<p>Nüüd on teil kümneminutine paus. Tulge tagasi enne pausi lõppu. Saate selle etapi vahele jätta ja jätkata, klõpsates nuppu.</p>',
    trial_duration: 300000,
    show_countdown_trial_duration: true,
    show_finished_button: true,
    finnished_button_label: "Lõpeta pausi ja jätka"
}

timeline.push(pause1_5_S);*/

/*
const testProcedure_2 = {
    timeline: [beforeTest_S, audioTrial_S, audioResponse_S],
    timeline_variables: timeline_var_round_2_S,

}

timeline.push(testProcedure_2);*/

/*
const pause2_5_S = {
    type: jsPsychSketchpad,
    prompt: '<p>Nüüd on teil viieminutine paus. Tulge tagasi enne pausi lõppu. Saate selle etapi vahele jätta ja jätkata, klõpsates nuppu.</p>',
    trial_duration: 300000,
    show_countdown_trial_duration: true,
    show_finished_button: true,
    finnished_button_label: "Lõpeta pausi ja jätka"
}*/

/*
timeline.push(pause1_5_S);
*/

/*
const testProcedure_3 = {
    timeline: [beforeTest_S, audioTrial_S, audioResponse_S],
    timeline_variables: timeline_var_round_3_S,
}

timeline.push(testProcedure_3);*/

/*
const katse_lõpp_S = {
    type: jsPsychHtmlButtonResponse,
    stimulus: '<p>Tänu osalemast</p>',
    choices: ['Lahku'],
}

timeline.push(katse_lõpp_S);*/

function startExp() {
    jsPsych.run(timeline);
}

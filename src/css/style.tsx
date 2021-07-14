import {makeStyles} from "@material-ui/core/styles"

export const useStyles = makeStyles({
  /* -------------- Content -------------- */
  root: {
    display: 'flex',
  },
  title: {
    float: 'left',
    fontSize: '20px',
    fontWeight: 'bold'
  },
  content: {
    margin: '0 5%',
    fontSize: '0.9rem',
    maxWidth: '1920px'
  },
  patient: {
    width: '100%',
    margin: '10px 0 24px 0',
    border: 'solid 1px #d8d8d8',
    backgroundColor: 'white',
  },
  tableLabel: {
    width: 100,
    wordBreak: 'break-all'
  },
  tableContent: {
    width: 200,
    wordBreak: 'break-all'
  },
  patient_content: {
    flex: 1,
    display: 'flex',
    padding: '34px 5% 34px 5%',
    '@media (max-width:680px)': {
      display: 'block'
    }
  },
  remark: {
    width: '100%',
    display: 'flex',
    '@media (max-width:650px)': {
      display: 'block'
    }
  },
  content_detail: {
    flex: 2.5,
    margin: '0 5px'
  },
  edit_content: {
    width: '100%',
    maxWidth: '300px',
    marginBottom: '20px'
  },
  patient_feature: {
    marginBottom: '10px',
    width: '100%',
    minHeight: '100px',
    padding: '10px',
    maxHeight: '300px',
    overflowY: 'auto',
    wordBreak: 'break-all'
  },
  patient_info: {
    width: '97%',
    marginTop: '5px',
    borderBottom: '1px solid #d8d8d8',
  },

  requestAccordionBox: {
    display: 'flex',
    width: '100%',
    marginTop: '5px',
    paddingLeft: '5px',
    backgroundColor: 'white',
    border: '1px solid #cccccc',
    height: '150px',
    overflow: 'auto'
  },
  requestAccordion: {
    backgroundColor: 'white',
    width: '100%',
    display: 'flex',
    maxHeight: '200px',
    padding: '20px 30px',
    '@media (max-width:960px)': {
      maxHeight: '700px',
      display: 'block'
    }
  },
  inputDisease: {
    width: '138px',
    height: '32px',
    lineHeight: '32px',
    margin: '13px 8px 0 13px',
    paddingLeft: '15px',
    borderRadius: '20px',
    backgroundColor: '#f0f0f0',
    float: 'left'
  },
  inputDiseaseBox: {
    width: '100%',
    height: '120px',
    overflowY: 'auto',
    border: '1px solid #cccccc'
  },
  symptom: {
    minHeight: '28px',
    lineHeight: '28px',
    paddingLeft: '5px',
    backgroundColor: 'white',
    flex: 1,
    margin: '7px 0',
    wordBreak: 'break-all'
  },
  requestDetail: {
    backgroundColor: 'white',
    height: '130px',
    marginTop: '12px',
    flex: 1
  },
  patientDetail: {
    marginTop: '10px',
    backgroundColor: 'white',
    height: '367px',
    overflowY: 'auto',
    border: '1px solid #cccccc',
    '@media (max-width:960px)': {
      minHeight: '150px'
    }
  },
  patientInfo: {
    flex: 2.5,
    display: 'flex',
    padding: '25px 5% 34px 5%',
    backgroundColor: '#fafafa'
  },
  requestImage: {
    backgroundColor: '#fafafa',
    display: 'flex',
    padding: '0 5%',
    '@media (max-width:960px)': {
      width: '100%',
      display: 'block'
    }
  },
  list: {
    display: 'flex',
    padding: '10px 10px 10px 10px',
  },
  item_icon: {
    width:'15px',
    height:'15px',
    marginTop: '5px'
  },
  item: {
    padding: '5px 0px 5px 5px',
    wordBreak: 'break-all'
  },
  requestDetailList: {
    flex: 1,
    padding: '15px 1% 15px 1%',
    overflow: 'hidden',
    minWidth: '80px',
    '@media (max-width:960px)': {
      width: '100%',
      borderBottom: '1px solid #d8d8d8',
      display: 'flex'
    }
  },
  requestDetail_content: {
    backgroundColor: '#f4f4f4',
    display: 'flex',
    padding: '0 5%',
    overflow: 'hidden',
    '@media (max-width:960px)': {
      display: 'block'
    }
  },
  remarkFooterItem: {
    width: '95%',
    marginTop: '5px',
    height: '26px',
    borderBottom: '1px solid #d8d8d8',
    paddingBottom: '4px',
    maxWidth: '300px',
    minWidth: '180px',
    overflow: 'hidden'
  },
  remarkFooter: {
    flex: 1,
    backgroundColor: '#fafafa',
    display: 'flex',
  },
  bold: {
    fontWeight: 500
  },
  textArea: {
    width: '100%',
    border: '1px solid #cccccc',
    marginTop: '10px',
    padding: '20px',
  },
  remark_item: {
    marginTop: '10px',
    padding: '7px 0 7px 7px',
    maxWidth: '500px',
    border: '1px solid #cccccc',
    backgroundColor: 'white'
  },
  remark_content: {
    flex: 1,
    padding: '15px 2% 15px 2%'
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },

  /* -------------- Auth -------------- */
  login_form: {
    height: '85%',
    width: '40%',
    maxWidth: '600px',
    minWidth: '450px',
    margin: '40px auto',
    textAlign: 'center',
    '@media (max-width:680px)': {
      width: '90%',
      maxWidth: '450px',
      minWidth: '300px'
    },
    '@media (max-width:350px)': {
      width: '90%',
      maxWidth: '90%',
      minWidth: '250px'
    }
  },
  auth_header: {
    width: '35%',
    margin: '40px auto',
    display: 'flex',
    '@media (max-width:350px)': {
      width: '70%'
    }
  },
  auth_title: {
    height: '107.5px',
    lineHeight: '107.5px',
    textAlign: 'center',
  },
  signup_step: {
    width: '60px',
    minWidth: '40px',
    fontSize: '0.8rem',
    color: '#9b9b9b',
    fontWeight: 500,
    marginLeft: '5px',
    marginTop: '3px'
  },
  signup_flow: {
    width: '120px',
    fontSize: '14px',
    marginRight: '35%',
    color: '#9b9b9b',
    fontWeight: 500,
    marginLeft: '5px',
    marginTop: '2px'
  },

  /* -------------- Filter -------------- */
  filter: {
    maxWidth: '400px',
    float: 'left',
    height: '60px',
    marginRight: '10px',
    '@media (max-width:350px)': {
      height: '10px'
    }
  },
  termDate: {
    width: '136.5px',
    '@media (max-width:380px)': {
      width: '110px'
    }
  },
  termDateHeight: {
    margin: '5px 0',
    height: '30px',
    '@media (max-width:350px)': {
      height: '60px'
    }
  },

  /*   image    */
  imageStyle: {
    marginRight: '5px',
    maxHeight: '200px',
    maxWidth: '200px',
    minWidth: '80%',
    cursor: 'pointer',
    '@media (max-width:350px)': {
      maxWidth: '150px',
    }
  },
  profile: {
    marginRight: '5px',
    maxHeight: '100px',
    maxWidth: '100px',
    minWidth: '80%',
    cursor: 'pointer',
    '@media (max-width:350px)': {
      maxWidth: '80px',
    }
  },
  uploadImage: {
    width: '240px',
    height: '240px',
    borderRadius: '2px',
    border: 'dashed 2px #cccccc',
    backgroundColor: '#ffffff',
    marginBottom: '10px',
    marginTop: '10px',
    padding: '10px',
    textAlign: 'center',
    cursor: 'pointer',
    '@media (max-width:350px)': {
      width: '100%',
      paddingBottom: '100%'
    }
  },
  uploadImageProfile: {
    width: '140px',
    height: '140px',
    borderRadius: '2px',
    border: 'dashed 2px #cccccc',
    backgroundColor: '#ffffff',
    marginBottom: '10px',
    marginTop: '10px',
    padding: '10px',
    textAlign: 'center',
    cursor: 'pointer',
    '@media (max-width:350px)': {
      width: '70%',
      maxWidth:'140px',
      paddingBottom: '100%'
    }
  },
  disease: {
    width: '75px',
    height: '28px',
    lineHeight: '28px',
    borderRadius: '30px',
    margin: '0 2.5px 10px 2.5px',
    fontSize: '12px',
    backgroundColor: '#e0e0e0',
    textAlign: 'center',
    float: 'left'
  },
  deleteTextField: {
    float: 'right',
    width: '18px',
    height: '18px',
    marginRight: '10px',
    marginTop: '5px',
    padding: 0
  },
  forgot: {
    margin: 0
  },
  uploadImageText: {
    color: '#757575',
    fontSize: '16px'
  },
  diaglogMsg: {
    minWidth: '300px',
    color: 'black',
    '@media (max-width:350px)': {
      minWidth: '200px',
    }
  },
  alertModal: {
    position: 'absolute',
    width: '25%',
    minWidth: '250px',
    maxWidth: '400px',
    backgroundColor: 'white',
    border: '1px solid #dddddd',
  },
  phoneModal: {
    position: 'absolute',
    width: '50%',
    maxWidth: '500px',
    minWidth: '250px',
    backgroundColor: 'white',
    border: '1px solid #dddddd',
    '@media (max-width:960px)': {
      maxWidth: '500px',
      width: '80%'
    }
  },
  curOval: {
    minWidth: '24px',
    maxWidth: '24px',
    height: '24px',
    fontSize: '14px',
    fontWeight: 500,
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: '1.71',
    letterSpacing: 'normal',
    opacity: 0.7,
    backgroundColor: '#3269d3',
    padding: '2px 0 0 0',
    color: '#ffffff',
    borderRadius: '20px'
  },
  oval: {
    minWidth: '24px',
    maxWidth: '24px',
    height: '24px',
    fontSize: '14px',
    fontWeight: 500,
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: '1.71',
    letterSpacing: 'normal',
    padding: '0 8px 0 8px',
    color: '#ffffff',
    backgroundColor: '#d8d8d8',
    borderRadius: '20px'
  },

  /* -------------- Footer -------------- */
  footerTitle: {
    //fontFamily: NanumSquareB,
    fontSize: '21px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    color: '#ffffff'
  },
  footerItem: {
    //font-family: NanumSquareB;
    fontSize: '12px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.67,
    letterSpacing: 'normal',
    color: '#e7ecf0'
  },

  /* -------------- Header -------------- */
  headerTitle: {
    fontSize: '18px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: '46px',
    letterSpacing: 'normal',
    color: '#ffffff',
    textAlign: 'center',
    height: '46px'
  },
  headerItem: {
    border: 0,
    padding: 0,
    margin: '0 5px',
    backgroundColor: '#1B4086',
    height: '46px',
    lineHeight: '46px',
    fontSize: '16px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    letterSpacing: 'normal',
    color: '#ffffff',
    textAlign: 'right'
  },

  content_line: {
    marginTop: '10px',
    padding: '7px 0 7px 7px',
    backgroundColor: 'white',
    border: '1px solid #cccccc',
    maxWidth: '100%',
    wordBreak: 'break-all',
  },

  /* -------------- Home -------------- */
  main_form: {
    backgroundColor: '#f5f5f6',
    width: '30%',
    minWidth: '340px',
    height: '271px',
    margin: '60px 0 120px 6%',
    padding: '31px 29px 72px 30px'
  },
  main_form_title: {
    color: '#545567',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    fontSize: '20px'
  },
  main_map: {
    width: '50%',
    minWidth: '400px',
    height: '271px',
    margin: '60px 161px 120px 40px',
    backgroundColor: '#f5f5f6',
    '@media (max-width:680px)': {
      width: '80%',
      maxWidth: '400px'
    }
  },

  formControl: {
    marginTop: '25px',
    width: '100%'
  },
  checkbox: {
    margin: 0
  },
  input: {
    marginTop: 0,
    padding: 0,
    width: '100%'
  },
  formLabel: {
    fontSize: '12px',
    marginBottom: '5px'
  },
  formControlLabel: {
    fontSize: '16px'
  },
  createIcon: {
    color: 'white',
    width: '15px',
    height: '15px'
  },
  report_field: {
    width: '10%',
    borderRight: '1px solid black',
    textAlign: 'center',
    height: '50px',
    lineHeight: '50px',
    overflow:'hidden',
    textOverflow: 'ellipsis'
  },
  report_section: {
    pageBreakBefore: 'always',
    padding: '30px',
    width: '100%',
    fontSize: '20px',
  },
  modal: {
    top: `50%`,
    left: `50%`,
    transform: `translate(-50%, -50%)`,
    display: 'flex',
    position: 'absolute',
    width: '85%',
    height: 508,
    border: '2px solid #d8d8d8',
    backgroundColor: 'white',
    '@media (max-width:960px)': {
      display: 'block',
      height: '520px',
      overflowY: 'auto'
    }
  },
  qrCode_btn: {
    float: 'right',
    margin: '30px 36px 0 0'
  },
  qrCode_refresh: {
    width: '50px',
    float: 'right',
    margin: '20px 30px 0 0',
    height: '50px',
    cursor: 'pointer'
  },
  qrCode_upload: {
    width: '80%',
    height: '320px',
    padding: '28px 5% 28px 5%',
    borderRadius: '4px',
    border: 'dashed 3px rgba(0, 0, 0, 0.12)',
    backgroundColor: '#ffffff',
    '@media (max-width:480px)': {
      width: '80%',
      height: 'auto',
    }
  },
  request_image: {
    height: '180px',
    padding: '10px 10px 10px 10px',
    borderRadius: '2px',
    border: 'dashed 2px #cccccc',
    backgroundColor: '#ffffff',
    width: '100%',
    overflowY: 'auto',
    marginTop: '10px',
    '@media (max-width:960px)': {
      width: '100%'
    }
  },
  subTitle: {
    height: '50px',
    lineHeight: '50px',
    width: '100%',
  },

  /* -------------- 버튼 -------------- */
  selectButton: {
    minHeight: 0,
    minWidth: 0,
    width: '75px',
    height: '28px',
    lineHeight: '28px',
    borderRadius: '30px',
    margin: '0 2.5px 0 2.5px',
    padding: 0,
    fontSize: '12px',
    '@media (max-width:680px)': {
      width: '55px',
      height: '23px',
      lineHeight: '23px',
      borderRadius: '20px',
      fontSize: '10px'
    },
    '@media (max-width:350px)': {
      width: '43px',
      height: '20px',
      lineHeight: '20px',
      borderRadius: '20px',
      fontSize: '9px'
    }
  },
  selectButtonClicked: {
    color: 'white',
    width: '75px',
    minHeight: 0,
    minWidth: 0,
    height: '28px',
    lineHeight: '28px',
    borderRadius: '30px',
    margin: '0 2.5px 0 2.5px',
    fontSize: '12px',
    backgroundColor: '#3269d3',
    '&:hover': {
      backgroundColor: '#3269d3',
    },
    fontWeight: 'bold',
    padding: 0,
    '@media (max-width:680px)': {
      width: '55px',
      height: '23px',
      lineHeight: '23px',
      borderRadius: '20px',
      fontSize: '10px'
    },
    '@media (max-width:350px)': {
      width: '43px',
      height: '20px',
      lineHeight: '20px',
      borderRadius: '20px',
      fontSize: '9px'
    }
  },
  splitBtnArrow: {
    width: '20px',
    height: '44px',
    '@media (max-width:680px)': {
      maxWidth: '15px',
      margin: 0,
      padding: 0,
      height: '36px'
    }
  },
  searchBtn: {
    width: '100px',
    minWidth: 0,
    minHeight: 0,
    height: '47px',
    marginLeft: '30px',
    justifyContent: 'center',
    padding: '5px 10px 5px 10px',
    borderColor: '#3269d3',
    '@media (max-width:350px)': {
      marginTop: '20%',
      width: '75px',
      height: '50%',
      maxHeight: '30px',
      marginLeft: '10px',
      fontSize: '10px',
      padding: 0
    }
  },
  createBtn: {
    float: 'right',
    width: '153px',
    height: '44px',
    padding: '10px 12.5px',
    marginBottom: '10px',
    '&:disabled': {
      color: 'red',
      backgroundColor: '#f4f4f4'
    },
    '@media (max-width:680px)': {
      width: '120px',
      height: '36px',
      padding: '5px 10px'
    },
    '@media (max-width:350px)': {
      width: '90px',
      height: '36px',
      padding: 0
    }
  },
  submitBtn: {
    width: '153px',
    height: '44px',
    padding: '10px 42.5px',
    marginBottom: '20px',
    '&:disabled': {
      color: '#9b9b9b',
      backgroundColor: '#f4f4f4'
    },
    '@media (max-width:680px)': {
      padding: '10px 22.5px',
    }
  },
  deleteBtn: {
    float: 'right',
    width: '153px',
    height: '44px',
    padding: '10px 32.5px',
    border: '1px solid #f44336',
    color: '#f44336',
    '&:disabled': {
      color: 'red',
      backgroundColor: '#f4f4f4'
    },
    '@media (max-width:680px)': {
      width: '120px',
      height: '36px',
      padding: '5px 10px'
    },
    '@media (max-width:350px)': {
      width: '90px',
      height: '36px',
      padding: 0
    }
  },
  addBtn: {
    width: '32px',
    border: '1px solid #3269D3',
    paddingLeft: '4px',
    paddingTop: '3px'
  },
  authSubmitBtn: {
    width: '153px',
    height: '44px',
    padding: '10px 42.5px',
    marginBottom: '20px',
    '&:disabled': {
      color: '#9b9b9b',
      backgroundColor: '#f4f4f4'
    },
    '@media (max-width:680px)': {
      padding: '7px 10.5px',
      width: '100px',
      height: '33px',
    }
  }
})
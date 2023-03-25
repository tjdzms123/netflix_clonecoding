import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function CheckboxLabels() {
  return (
    <FormGroup>
      <FormControlLabel control={<Checkbox defaultChecked />} label="예, 저는 개인정보 처리방침에 따른 개인정보 수집 및 활용에 동의합니다. (상세정보)" />
      <FormControlLabel control={<Checkbox defaultChecked />} label="예, 넷플릭스 특별 할인 알림 이메일을 보내주세요.(선택 사항)" />
      {/* <FormControlLabel disabled control={<Checkbox />} label="Disabled" /> */}
    </FormGroup>
  );
}
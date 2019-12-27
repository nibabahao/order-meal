export interface ConfirmData {
  title?: string;
  msg: string;
  confirmText?: string;
  cancelText?: string;
  isShowConfirm?: boolean;
  isShowCancel?: boolean;
  onConfirm?: Function;
  onCancle?: Function;
}

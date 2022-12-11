import { FieldHook } from 'payload/types';

const encryptKey: FieldHook = ({ req, value }) => (value ? req.payload.encrypt(value as string) : undefined);
const decryptKey: FieldHook = ({ req, value }) => (value ? req.payload.decrypt(value as string) : undefined);

const encryptField : {[key:string] : [FieldHook]} = {
  beforeChange: [
    encryptKey,
  ],
  afterRead: [
    decryptKey,
  ],
};

export default encryptField;
import * as bcrypt from 'bcrypt';

const SALT_ROUNDS = 10;

/**
 * 文字列をハッシュ化する
 * @param rawString - ハッシュ化する文字列
 * @returns ハッシュ化された文字列
 */
export async function hashString(rawString: string): Promise<string> {
  const salt = await bcrypt.genSalt(SALT_ROUNDS);
  return bcrypt.hash(rawString, salt);
}

/**
 * 文字列とハッシュ値を比較（検証）する
 * @param rawString - 元の文字列
 * @param hashedString - ハッシュ化された文字列
 * @returns 一致する場合は true, そうでない場合は false
 */
export async function compareHash(
  rawString: string,
  hashedString: string,
): Promise<boolean> {
  return bcrypt.compare(rawString, hashedString);
}

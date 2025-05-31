import { execSync } from 'child_process';

export async function setup() {
  try {
    execSync('npx sequelize-cli db:create');
  } catch (err) {
    console.warn('Database might already exist, skipping creation.');
  }

  execSync('npx sequelize-cli db:migrate:undo:all', { stdio: 'inherit' });
  execSync('npx sequelize-cli db:migrate', { stdio: 'inherit' });
  execSync('npx sequelize-cli db:seed:all', { stdio: 'inherit' });
}
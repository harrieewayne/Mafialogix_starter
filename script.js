// Replace with your Supabase details
const SUPABASE_URL = "https://jzlwaxhxwfwssceyegzt.supabase.co";
const SUPABASE_KEY = "process.env.SUPABASE_KEY";

const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

async function joinGame() {
  const playerName = document.getElementById('playerName').value;
  const status = document.getElementById('status');

  if (!playerName) {
    status.textContent = "Please enter a name.";
    return;
  }

  const { data, error } = await supabase
    .from('players')
    .insert([{ name: playerName }]);

  if (error) {
    status.textContent = "Error: " + error.message;
  } else {
    status.textContent = `Joined game as ${playerName}`;
  }
}

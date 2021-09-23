// alert('hi');
// console.log(io);
const socket = io() // if we change this to something other than local host, it should register on server
const messageContainer = document.getElementById('message-container')
const messageForm = document.getElementById('send-container')
const messageInput = document.getElementById('message-input')
const username = document.getElementById('username');

appendMessage('You joined')
socket.emit('new-user', username.innerText);

// When user receives message, other person's name will display with their message
socket.on('chat-message', data => {
  appendMessage(`${data.name}: ${data.message}`)
})

// Alert user when other users connect or disconnect
socket.on('user-connected', name => {
  appendMessage(`${name} connected`)
})

socket.on('user-disconnected', name => {
  appendMessage(`${name} disconnected`)
})

// When user sends a message, it will display in browswer
messageForm.addEventListener('submit', e => {
  e.preventDefault()
  const message = messageInput.value
  appendMessage(`You: ${message}`)
  socket.emit('send-chat-message', message)
  messageInput.value = ''
})

function appendMessage(message) {
  const messageElement = document.createElement('div')
  messageElement.innerText = message
  messageContainer.append(messageElement)
}
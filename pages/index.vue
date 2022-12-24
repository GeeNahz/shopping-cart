<script lang="ts" setup>
const firebaseUser = useFirebaseUser()

const signIn = async () => {
  const email = 'example@gmail.com'
  const password = 123456
  await signInUserEmailPassword(email, password.toString())
}
const signOut = async () => {
  await signOutUser()
}
</script>

<template>
  <div class="container">
    <h3>Home Page</h3>
    <br />
    <br />
    <button v-if="!firebaseUser" class="btn btn-secondary" @click="signIn">Sign In</button>
    <button v-if="firebaseUser" class="btn btn-primary" @click="signOut">Sign Out</button>
    <div v-if="firebaseUser">
      <client-only>
        <pre>
          {{ firebaseUser }}
        </pre>
      </client-only>
    </div>
    <div v-else>User signed out</div>
  </div>
</template>

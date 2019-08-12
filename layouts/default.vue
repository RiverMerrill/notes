<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      fixed
      app
    >
      <v-btn @click="showAddGroupField()">
        <v-icon>add</v-icon>
        add group
      </v-btn>
      <v-list>
        <template v-for="(group, i) in items">
          <v-list-tile
            :key="group.title"
            avatar
            @click="group.showNotes = !group.showNotes"
          >
            <v-list-tile-content>
              <v-list-tile-title v-html="group.title"></v-list-tile-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-btn
                icon
                ripple
              >
                <v-icon>add</v-icon>
              </v-btn>
            </v-list-tile-action>
          </v-list-tile>
          <template v-if="group.showNotes">
            <v-list-tile
              v-for="note in group.notes"
              :key="note.title"
              @click="console.log('')"
            >
              <v-list-tile-sub-title
                class="menu-note"
                v-for="note in group.notes"
                :key="note.title"
                v-html="note.title"
              ></v-list-tile-sub-title>
            </v-list-tile>
          </template>
        </template>
        <v-text-field
          ref="newGroupField"
          v-if="showAddGroup"
          class="new-group-field"
          v-model="newGroupField"
          label="Group Name"
          v-on:blur="showAddGroup = false"
          @keyup.enter.native="addGroup()"
        ></v-text-field>
      </v-list>
      <v-btn
        icon
        @click.stop="drawer = !drawer"
        small
        fixed
        fab
        bottom
        right
      >
        <v-icon>{{ `chevron_left` }}</v-icon>
      </v-btn>
    </v-navigation-drawer>
    <v-btn
      icon
      @click.stop="drawer = !drawer"
    >
      <v-icon>{{ `chevron_right` }}</v-icon>
    </v-btn>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import db from '~/db';
export default {
  data() {
    return {
      drawer: false,
      items: [{ showNewNoteField: false, showNotes: false, title: 'a notebook', notes: [{ title: 'note1', value: 'I am a single note' }] }, { showNewNoteField: false, showNotes: false, title: 'another notebook', notes: [] }],
      selectedItem: '',
      newGroupField: '',
      showAddGroup: false,
    }
  },
  methods: {
    showAddGroupField() {
      this.newGroupField = '';
      this.showAddGroup = true;
      this.$nextTick(() => {
        this.$refs.newGroupField.focus();
      });
    },
    addGroup() {
      this.items.push({ title: this.newGroupField });
      this.showAddGroup = false;
    }
  }
  // firebase: {
  //   groups: db.ref('groups2')
  // }
}
</script>

<style scoped>
.menu-note {
  margin-left: 20px;
}
.new-group-field,
.new-note-field {
  width: 90%;
  margin-left: 5%;
}
</style>


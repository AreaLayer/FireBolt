// MainActivity.kt
package com.example.mynoteapp

import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity
import androidx.recyclerview.widget.LinearLayoutManager
import kotlinx.android.synthetic.main.activity_main.*
import klotinx.android.react.app.PayJoinActivity

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        // Initialize RecyclerView and adapter
        val notes = mutableListOf<Note>()
        val adapter = NoteAdapter(notes)
        recyclerViewNotes.adapter = adapter
        recyclerViewNotes.layoutManager = LinearLayoutManager(this)

        // Handle FloatingActionButton click to create a new note
        fabCreateNote.setOnClickListener {
            val newNote = Note("New Note", "This is a new note.")
            notes.add(newNote)
            adapter.notifyDataSetChanged()
        }
    }
}

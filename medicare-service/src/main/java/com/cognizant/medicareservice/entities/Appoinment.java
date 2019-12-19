package com.cognizant.medicareservice.entities;

import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.hibernate.annotations.Cascade;

import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
@Table(name = "appointment")
public class Appoinment {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "ap_id")
	private int id;
	@Column(name = "ap_pt_first_name")
	private String patientFirstName;
	@Column(name = "ap_pt_last_name")
	private String patientLastName;
	@Column(name = "ap_booking_date")
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd", locale = "pt-BR", timezone = "IST")
	private Date bookingDate;
	@Column(name = "ap_appointment_date")
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd", locale = "pt-BR", timezone = "IST")
	private Date appointmentDate;
	@Column(name = "ap_status")
	private boolean status;
	@OneToOne
	@JoinColumn(name = "ap_medicare_service_id")
	private MedicareServices medicareServices;
	@ManyToOne
	@JoinColumn(name = "ap_dc_id")
	private Doctor doctor;
	@ManyToOne
	@JoinColumn(name = "ap_us_id")
	private User user;

	public Appoinment() {
		super();
	}

	public Appoinment(int id, String patientFirstName, String patientLastName, Date bookingDate, Date appointmentDate,
			boolean status, MedicareServices medicareServices, Doctor doctor, User user) {
		super();
		this.id = id;
		this.patientFirstName = patientFirstName;
		this.patientLastName = patientLastName;
		this.bookingDate = bookingDate;
		this.appointmentDate = appointmentDate;
		this.status = status;
		this.medicareServices = medicareServices;
		this.doctor = doctor;
		this.user = user;
	}

	public MedicareServices getMedicareServices() {
		return medicareServices;
	}



	public void setMedicareServices(MedicareServices medicareServices) {
		this.medicareServices = medicareServices;
	}



	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getPatientFirstName() {
		return patientFirstName;
	}

	public void setPatientFirstName(String patientFirstName) {
		this.patientFirstName = patientFirstName;
	}

	public String getPatientLastName() {
		return patientLastName;
	}

	public void setPatientLastName(String patientLastName) {
		this.patientLastName = patientLastName;
	}

	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd", locale = "pt-BR", timezone = "IST")
	public Date getBookingDate() {
		return bookingDate;
	}

	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd", locale = "pt-BR", timezone = "IST")
	public void setBookingDate(Date bookingDate) {
		this.bookingDate = bookingDate;
	}

	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd", locale = "pt-BR", timezone = "IST")
	public Date getAppointmentDate() {
		return appointmentDate;
	}

	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd", locale = "pt-BR", timezone = "IST")
	public void setAppointmentDate(Date appointmentDate) {
		this.appointmentDate = appointmentDate;
	}

	public boolean isStatus() {
		return status;
	}

	public void setStatus(boolean status) {
		this.status = status;
	}

	public Doctor getDoctor() {
		return doctor;
	}

	public void setDoctor(Doctor doctor) {
		this.doctor = doctor;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}



	@Override
	public String toString() {
		return "Appoinment [id=" + id + ", patientFirstName=" + patientFirstName + ", patientLastName="
				+ patientLastName + ", bookingDate=" + bookingDate + ", appointmentDate=" + appointmentDate
				+ ", status=" + status + ", medicareServices=" + medicareServices + ", doctor=" + doctor + ", user="
				+ user + "]";
	}

}
